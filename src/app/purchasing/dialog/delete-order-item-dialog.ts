import {Component, Output, Input, EventEmitter} from '@angular/core';
import {PurchasingOrders} from "../../_shared/api/PurchasingOrders";


@Component({
  selector: 'delete-order-item-dialog',
  styles: [require('./dialog.scss')],
  template: require('./delete-order-item-dialog.html')
})

export class DeletePurchasingOrderItemDialog {
  @Input() itemId;
  @Input() order;
  @Output() ordersChange = new EventEmitter();
  @Output() cancelDialogRequest = new EventEmitter();


  constructor(private purchasingOrders:PurchasingOrders) {

  }

  cancelDialog() {
    this.cancelDialogRequest.emit(1);
  }

  deleteOrderItem() {
    this.purchasingOrders.deletePurchasingOrderItem(this.itemId).then(r=> {
      if (r) {
        this.order.orderItems = this.order.orderItems.filter(ele => ele.id != this.itemId);
        this.cancelDialog();
      }
    });
  }
}
