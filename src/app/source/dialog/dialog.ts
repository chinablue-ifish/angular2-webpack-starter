import {Component, Output, Input, EventEmitter} from '@angular/core';
import {PurchasingOrders} from "../../_shared/api/PurchasingOrders";
import {Auth} from "../../_shared/api/Auth";
import * as _ from "lodash";
import {PurchasingOrder} from "../../_shared/models/PurchasingOrder";

@Component({
  selector: 'purchasing-confirm-dialog',
  styles: [require('./dialog.scss')],
  template: require('./dialog.html')
})
export class PurchasingConfirmDialog {

  constructor(private purchasingOrder:PurchasingOrders, private auth:Auth) {
  }


  @Input() currentSelectedItemId:string;

  showOldList;
  showContent;
  showPrompt;
  error:string;
  isReady;
  selection;

  @Input() purchasingOrderList;


  ngOnInit() {
    this.selection = null;
    this.error = null;
    this.showContent = true;
    this.showOldList = 1;
    this.showPrompt = false;
    this.isReady = false;

    setTimeout(()=> {
      this.selection = this.purchasingOrderList && this.purchasingOrderList[0];
      this.initPurchasingOrderList();
      if (!this.purchasingOrderList || !this.purchasingOrderList.length) this.showOldList = 0;
    }, 30);
  }

  private initPurchasingOrderList() {
    if (this.auth.loggedIn) {
      this.purchasingOrder.getPurchasingOrderList().then(r => {
        if (r) {
          let newestOrderList = _.filter(r, (ele:PurchasingOrder)=> ele.orderStatus != "DONE");
          if (this.purchasingOrderList && newestOrderList.length != this.purchasingOrderList.length) {
            newestOrderList = newestOrderList.sort((a:PurchasingOrder, b:PurchasingOrder):number=> {
              return b.createdDate - a.createdDate;
            });
            this.purchasingOrderList = newestOrderList;
            this.selection = this.purchasingOrderList && this.purchasingOrderList[0];
          }
        }
      });
    }
  }

  @Output() cancelDialogRequest = new EventEmitter();

  cancelDialog() {
    this.cancelDialogRequest.emit(1);
  }


  createPurchasingOrder(name:string) {
    name = name && name.trim();
    if (!name || !this.currentSelectedItemId) {
      this.error = '订单名字不能为空';
      return false;
    }
    this.purchasingOrder.savePurchasingOrder(name, this.currentSelectedItemId).then(r => {
      if (r) this.showPromptAfterClickConfirm();
    });
  }

  showPromptAfterClickConfirm() {
    this.showContent = false;
    this.showPrompt = true;
    this.error = null;
    setTimeout(()=> {
      this.showPrompt = false;
      this.cancelDialog();
    }, 1000);
  }


  confirmSelectedOrder() {
    if (!this.selection || !this.selection.id) {
      this.error = "请选择一个订单";
      return false;
    }
    this.purchasingOrder.addPurchasingOrderItem(this.selection.id, this.currentSelectedItemId).then(r => {
      if (r.ok) this.showPromptAfterClickConfirm();
      else {
        this.error = r.json().msg;
      }
    });
  }
}
