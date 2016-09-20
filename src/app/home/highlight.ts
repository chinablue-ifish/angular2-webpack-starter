import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-highlight',
  template: require('./highlight.html'),
  styles: [
    require('./highlight.scss')
  ]
})
export class HomeHighlight implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
