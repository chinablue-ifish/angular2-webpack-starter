import {Component, Input} from '@angular/core';
import {UrlPair} from '../_shared/utils/url-pair';
import {DecodeUriPipe} from '../_shared/pipes/decode-uri-pipe';

@Component({
  selector: 'nav-breadcrumb',
  styles: [
    require('./breadcrumb.scss')
  ],
  template: require('./breadcrumb.html'),
  pipes: [DecodeUriPipe],
})
export class NavBreadcrumb {
  constructor() {
  }

  @Input() paths: UrlPair[] = [];
}
