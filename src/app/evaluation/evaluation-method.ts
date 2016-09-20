import { Component } from '@angular/core';
import {UrlPair} from "../_shared/utils/url-pair";

@Component({
  selector: 'evaluation-method',
  styles: [
    require('./evaluation-method.scss')
  ],
  template: require('./evaluation-method.html'),
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
