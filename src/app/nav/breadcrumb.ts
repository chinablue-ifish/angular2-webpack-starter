import {Component, Input} from '@angular/core';
import {UrlPair} from '../_shared/utils/url-pair';
//import {DecodeUriPipe} from '../_shared/pipes/decode-uri-pipe';//TODO:deprecated

@Component({
  selector: 'nav-breadcrumb',
  styles: [
    require('./breadcrumb.scss')
  ],
  template: require('./breadcrumb.html'),
  //pipes: [DecodeUriPipe],//TODO:deprecated
})
export class NavBreadcrumb {
  constructor() {
  }

  @Input() paths: UrlPair[] = [];
}
