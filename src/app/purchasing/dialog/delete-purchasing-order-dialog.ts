import {Component, Output, Input, EventEmitter} from '@angular/core';
import {PurchasingOrders} from "../../_shared/api/PurchasingOrders";


@Component({
  selector: 'delete-order-dialog',
  styles: [require('./dialog.scss')],
  template: require('./delete-order-dialog.html')
})

export class DeletePurchasingOrderDialog {
  @Input() orderId;
  @Input() orders;
  @Output() ordersChange = new EventEmitter();
  @Output() cancelDialogRequest = new EventEmitter();


  constructor(private purchasingOrders:PurchasingOrders) {

  }

  cancelDialog() {
    console.log(this.orders)
    this.cancelDialogRequest.emit(1);
  }

  deletePurchasingOrder() {
    this.purchasingOrders.deletePurchasingOrder(this.orderId).then(r=> {
      if (r) {
        this.orders.items.order = this.orders.items.order.filter(ele=> {
          return ele.id != this.orderId;
        });
        this.ordersChange.emit(this.orders);
        this.cancelDialog();
      }
    });
  }
}
