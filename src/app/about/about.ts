import { Component } from '@angular/core';
import {NavHeader} from "../nav/header";
import {NavBreadcrumb} from "../nav/breadcrumb";
import {NavFooter} from "../nav/footer";
import {UrlPair} from "../_shared/utils/url-pair";

@Component({
  selector: 'app-about',
  styles: [
    require('./about.scss')
  ],
  template: require('./about.html'),
  directives: [NavHeader, NavBreadcrumb, NavFooter]
})
export class About {
  constructor() {

  }

  ngOnInit() {
  }

  navPaths: UrlPair[] = [
    {
      title: '关于我们'
    }
  ];
}
