import { Component, Input } from '@angular/core';
import {UrlPair} from "../utils/url-pair";

@Component({
  selector: 'about',
  styles: [
    require('./about.scss')
  ],
  template: require('./about.html'),
})
export class About {
  constructor() {

  }

  ngOnInit() {
  }

  @Input() bannerImageUrl: string;
  @Input() titleImageUrl: string;
  @Input() title: string;
  @Input() content: string;
  @Input() asideLinks: UrlPair[] = [];
  @Input() asideImageUrl: string;
}
