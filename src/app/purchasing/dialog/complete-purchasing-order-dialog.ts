import {Component, Output, Input, EventEmitter} from '@angular/core';
import {PurchasingOrders} from "../../_shared/api/PurchasingOrders";


@Component({
  selector: 'complete-purchasing-order-dialog',
  styles: [require('./dialog.scss')],
  template: require('./complete-purchasing-order-dialog.html')
})
export class CompletePurchasingOrderDialog {

  constructor(private purchasingOrders:PurchasingOrders) {

  }

  @Output() cancelDialogRequest = new EventEmitter();
  @Input() orderId;
  @Input() orders;
  
  cancelDialog() {
    this.cancelDialogRequest.emit(1);
  }

  completePurchasingOrder() {
    this.purchasingOrders.updatePurchasingOrder({id: this.orderId, orderStatus: "DONE"}).then(r=> {
      if (r) {
        this.orders.items.order.forEach(ele => {
          if (ele.id == this.orderId) ele.orderStatus = "DONE";
        });
      }
      this.cancelDialog();
    });
  }
}
