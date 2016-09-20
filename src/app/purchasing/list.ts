import {Component} from "@angular/core";
import {PurchasingOrders} from "../_shared/api/PurchasingOrders";
import {OrderStatusPipe} from "../_shared/pipes/OrderStatusPipe";
import {NavBreadcrumb} from "../nav/breadcrumb";
import {UrlPair} from "../_shared/utils/url-pair";
/*
import {DeletePurchasingOrderDialog} from "./dialog/delete-purchasing-order-dialog.ts";
import {CompletePurchasingOrderDialog} from "./dialog/complete-purchasing-order-dialog";
import {DatePipe} from "./datePipe";
import {PaginationDemoComponent} from "../_shared/components/pagination";
*/
import {Router} from "@angular/router";

@Component({
  selector: 'purchasing-list',
  styles: [
    require('./list.scss')
  ],
  template: require('./list.html'),

  //TODO: deprecated; pipes: [OrderStatusPipe, DatePipe],
  //TODO: deprecated; directives: [NavBreadcrumb, DeletePurchasingOrderDialog, CompletePurchasingOrderDialog, PaginationDemoComponent]
})
export class PurchasingList {
  constructor(private orders:PurchasingOrders, private router:Router) {

  }

  navPaths:UrlPair[] = [
    {
      title: '我的清单'
    }
  ];
  showDeleteDialog = false;
  showCompletePurchasingDialog = false;
  currentOperateOrderId;

  ngOnInit() {
    this.orders.query(null);
  }

  numPageChanged(num:Number) {
    this.orders.query(num);
  }

  gotoDeleteDialog(id:string) {
    this.currentOperateOrderId = id;
    this.showDeleteDialog = true;
  }

  cancelDeleteDialog() {
    this.showDeleteDialog = false;
  }

  cancelCompletePurchasingDialog() {
    this.showCompletePurchasingDialog = false;
  }

  gotoCompletePurchasingDialog(id:string) {
    this.showCompletePurchasingDialog = true;
    this.currentOperateOrderId = id;
  }

  gotoOrderDetails(id) {
    this.router.navigate(['/purchasing/show', {id: id}]);
  }
}
