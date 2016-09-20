import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import search = require("core-js/fn/symbol/search");


@Component({
  selector: 'source-search',
  template: require('./search.html'),
  styles: [
    require('./search.scss')
  ]
})
export class SourceSearch implements OnInit {
  constructor(private router:Router) {
  }

  ngOnInit() {
  }

  search(keyword:string) {
    this.router.navigate(['./source/list', {keyword: encodeURI(keyword || '')}]);
  }
}
