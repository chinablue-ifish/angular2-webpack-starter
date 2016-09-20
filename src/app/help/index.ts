import {Component, OnInit} from "@angular/core";
import {NavHeader} from "../nav/header";
import {NavFooter} from "../nav/footer";

export {HelpLegacy} from './legacy';
export {HelpCenter} from './center';
export {HelpContact} from './contact';

@Component({
  selector: 'help-index',
  template: require('./index.html'),
  styles: [
    require('./index.scss')
  ],
  directives: [NavHeader, NavFooter]
})
export class Help implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
