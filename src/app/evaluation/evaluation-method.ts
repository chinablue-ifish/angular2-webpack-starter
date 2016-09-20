import { Component } from '@angular/core';
import {NavHeader} from "../nav/header";
import {NavBreadcrumb} from "../nav/breadcrumb";
import {NavFooter} from "../nav/footer";
import {UrlPair} from "../_shared/utils/url-pair";

@Component({
  selector: 'evaluation-method',
  styles: [
    require('./evaluation-method.scss')
  ],
  template: require('./evaluation-method.html'),
  directives: [NavHeader, NavBreadcrumb, NavFooter]
})
export class EvaluationMethod {
  constructor() {

  }

  
  ngOnInit() {
  }

  navPaths: UrlPair[] = [
    {
      title: '评价方法'
    }
  ];
}
