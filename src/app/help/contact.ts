import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'help-contact',
  template: require('./contact.html'),
  styles: [
    require('./contact.scss')
  ]
})
export class HelpContact implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
