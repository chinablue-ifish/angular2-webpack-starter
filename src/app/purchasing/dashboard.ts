import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PurchasingOrders} from '../_shared/api/PurchasingOrders';
import {PurchasingOrder} from '../_shared/models/PurchasingOrder';
import {Chart} from '../_shared/components/chart';
import * as _ from 'lodash';
import {UrlPair} from '../_shared/utils/url-pair';
import {NavBreadcrumb} from '../nav/breadcrumb';
import {DatePipe} from './datePipe';

@Component({
  selector: 'purchasing-dashboard',
  template: require('./dashboard.html'),
  styles: [
    require('./dashboard.scss')
  ],
  directives: [Chart, NavBreadcrumb],
  pipes: [DatePipe]
})
export class PurchasingDashboard implements OnInit {
  constructor(private route: ActivatedRoute, private orders: PurchasingOrders) {
    this.ie = navigator.userAgent.indexOf('Trident') !== -1;
  }

  order: PurchasingOrder;

  data;

  navPaths: UrlPair[] = [
    {
      title: '我的清单'
    },
    {
      title: ''
    }
  ];

  ie: boolean = false;

  ngOnInit() {
    this.orders.get(this.route.snapshot.params['id']).then((data)=> {
      this.order = data;
      this.navPaths[1].title = `${this.order.orderName} 详情`;
      this.data = {
        columns: stat(data.orderItems),
        names: {
          A: 'Best',
          B: 'Good',
          C: 'Acceptable',
          D: 'General'
        },
        colors: {
          A: '#317CC0',
          B: '#488618',
          C: '#D39601',
          D: '#BABABA'
        },
        color: 'white',
        type: 'donut',
      };
    });
    this.navPaths[0].url = '/purchasing/list';
  }

  getExportUrl(chart: Chart) {
    return chart.toSvg();
  }
}

export function stat(items) {
  var temp: any = _.countBy(items, 'level');
  return [['A', temp.A || 0], ['B', temp.B || 0], ['C', temp.C || 0], ['D', temp.D || 0]];
}
