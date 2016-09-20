import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'help-center',
  template: require('./center.html'),
  styles: [
    require('./center.scss')
  ]
})
export class HelpCenter implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
  
}
