import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'help-legacy',
  template: require('./legacy.html'),
  styles: [
    require('./legacy.scss')
  ]
})
export class HelpLegacy implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
