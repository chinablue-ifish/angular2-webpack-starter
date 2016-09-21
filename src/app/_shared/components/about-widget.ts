import { Component, Input } from '@angular/core';
import {UrlPair} from "../utils/url-pair";

@Component({
  selector: 'about-widget',
  styles: [
    require('./about-widget.scss')
  ],
  template: require('./about-widget.html'),
})
export class AboutWidget {
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
