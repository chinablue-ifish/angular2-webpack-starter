import { Component } from '@angular/core';
import {UrlPair} from "../_shared/utils/url-pair";

@Component({
  selector: 'app-about',
  styles: [
    require('./about.scss')
  ],
  template: require('./about.html')
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
