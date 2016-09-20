import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {NavHeader} from "../nav/header";
import {NavBreadcrumb} from "../nav/breadcrumb";
import {NavFooter} from "../nav/footer";
import {UrlPair} from "../_shared/utils/url-pair";
import {AquaticSources} from "../_shared/api/AquaticSources";
import {AquaticSource} from "../_shared/models/AquaticSource";
import {SourceBase} from "./base";
import {SourceLevel} from "./level";
import {SourceReport} from "./report";
import {SourceMore} from "./more";
import {GradeModal} from "./grade-modal";
import {CORE_DIRECTIVES} from "@angular/common";
import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from "ng2-bootstrap";
import * as _ from 'lodash';

@Component({
  selector: 'source-show',
  template: require('./show.html'),
  styles: [
    require('./show.scss')
  ],
  viewProviders: [BS_VIEW_PROVIDERS],
  directives: [NavHeader, NavBreadcrumb, NavFooter, SourceBase, SourceLevel, SourceReport,
    SourceMore, GradeModal, MODAL_DIRECTVES, CORE_DIRECTIVES]
})
export class SourceShow implements OnInit {
  constructor(private route:ActivatedRoute, private router:Router, private sources:AquaticSources) {
  }

  ngOnInit() {
    var params = this.route.snapshot.params;
    this.navPaths = [
      {
        title: '水产品列表',
        url: '/source/list',
        urlParams: _.omit(params, 'id')
      },
      {
        title: ''
      }
    ];
    this.sources.get(params['id']).then((data)=> {
      this.source = data;
      this.navPaths[1].title = `${this.source.chineseName}详情`;
      let orderName = this.route.snapshot.params['orderName'];
      if (orderName) {
        var orderId = this.route.snapshot.params['orderId'];
        this.navPaths = [{
          title: '我的清单',
          url: '/purchasing/list'
        }, {
          title: orderName,
          url: `/purchasing/show`,
          urlParams: {id: orderId}
        }, {
          title: `${this.source.chineseName}详情`
        }]
      }
    });
  }

  source:AquaticSource;

  navPaths:UrlPair[];
}
