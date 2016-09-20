import {Component, Input} from '@angular/core';
import {UrlPair} from '../_shared/utils/url-pair';


@Component({
  selector: 'nav-breadcrumb',
  styles: [
    require('./breadcrumb.scss')
  ],
  template: require('./breadcrumb.html'),
})
export class NavBreadcrumb {
  constructor() {
  }

  @Input() paths: UrlPair[] = [];
}
