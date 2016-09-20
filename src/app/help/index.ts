import {Component, OnInit} from "@angular/core";

export {HelpLegacy} from './legacy';
export {HelpCenter} from './center';
export {HelpContact} from './contact';

@Component({
  selector: 'help-index',
  template: require('./index.html'),
  styles: [
    require('./index.scss')
  ]
})
export class Help implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
