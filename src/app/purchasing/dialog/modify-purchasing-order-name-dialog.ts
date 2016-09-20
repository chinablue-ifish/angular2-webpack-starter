import {Component, Output, Input, EventEmitter} from '@angular/core';
import {PurchasingOrders} from "../../_shared/api/PurchasingOrders";

@Component({
  selector: 'modify-purchasing-order-name-dialog',
  styles: [require('./dialog.scss')],
  template: require('./modify-purchasing-order-name-dialog.html')
})

export class ModifyPurchasingOrderNameDialog {
  constructor(private purchasingOrder:PurchasingOrders) {

  }

  @Input() order;
  @Output() cancelDialogRequest = new EventEmitter();
  orderName:string;
  error:string;

  ngOnInit() {
    this.orderName = this.order.orderName;
  }

  cancelDialog() {
    this.cancelDialogRequest.emit(1);
  }

  updatePurchasingOrder(name:string) {
    this.purchasingOrder.updatePurchasingOrder({
      id: this.order.id,
      orderName: name
    }).then(r => {
      this.order.orderName = name;
      this.cancelDialog();
    });
  }

  submit() {
    this.orderName = this.orderName && this.orderName.trim();
    if (!this.orderName){
      this.error = '格式有误';
      return false;
    }
      this.purchasingOrder.updatePurchasingOrder({
        id: this.order.id,
        orderName: this.orderName
      }).then(r => {
        this.order.orderName = this.orderName;
        this.cancelDialog();
      });
  }
}
