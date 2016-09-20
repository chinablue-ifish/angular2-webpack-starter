import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PurchasingOrders} from '../_shared/api/PurchasingOrders';
import {PurchasingOrder} from '../_shared/models/PurchasingOrder';
import {UrlStrengthPipe} from '../_shared/pipes/UrlStrength';
import {NavBreadcrumb} from '../nav/breadcrumb';
import {UrlPair} from '../_shared/utils/url-pair';
import {ModifyPurchasingOrderNameDialog} from './dialog/modify-purchasing-order-name-dialog';
import {ShowVendors} from './show-vendors';
import {SelectVendorDialog} from './dialog/select-vendor-dialog';
import {DatePipe} from './datePipe';
import {AquaticLevelImgPipe} from '../source/aquatic-level-img-pipe';
import {RegionTransformationPipe} from '../_shared/pipes/regionTransformationPipe';
import {DeletePurchasingOrderItemDialog} from './dialog/delete-order-item-dialog';
import {TrustAsImgUrlPipe} from '../_shared/pipes/trust-as-img-url';
import {StopPropagationDirective} from '../_shared/directives/stop-propagation';

@Component({
  selector: 'purchasing-show',
  template: require('./show.html'),
  styles: [
    require('./show.scss')
  ],
  directives: [ModifyPurchasingOrderNameDialog, NavBreadcrumb, ShowVendors, SelectVendorDialog, DeletePurchasingOrderItemDialog, StopPropagationDirective],
  pipes: [UrlStrengthPipe, DatePipe, AquaticLevelImgPipe, RegionTransformationPipe, TrustAsImgUrlPipe],
})
export class PurchasingShow implements OnInit {
  constructor(private route: ActivatedRoute, private orders: PurchasingOrders, private router: Router) {
  }

  order: PurchasingOrder;
  showDialog;
  showDeleteDialog;
  currentOperateItemId;
  downloadOrderDetailPrefix = "/api/order/export/";

  ngOnInit() {
    this.orders.get(this.route.snapshot.params['id']).then((data)=> {
      this.order = data;
      this.navPaths[1].title = `${this.order.orderName} 详情`;
      console.log(this.order)
    });
    this.navPaths[0].url = '/purchasing/list';
  }

  navPaths: UrlPair[] = [
    {
      title: '我的清单',
      url: ''
    },
    {
      title: ''
    }
  ];

  gotoDialog(id: string, name: string) {
    this.showDialog = true;

  }

  cancelPurchasingConfirmDialog() {
    this.showDialog = false;
  }

  gotoDeleteDialog(id: string) {
    this.currentOperateItemId = id;
    this.showDeleteDialog = true;
  }

  cancelDeleteDialog() {
    this.showDeleteDialog = false;
  }

  gotoAquaticDetails(info) {
    this.router.navigate(['/source/show', info]);
  }
}
