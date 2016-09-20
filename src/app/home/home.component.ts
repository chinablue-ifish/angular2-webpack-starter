import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
/* TODO:deprecated;   
import { XLarge } from './x-large';
import {NavHeader} from "../nav/header";
import {NavBreadcrumb} from "../nav/breadcrumb";
import {NavFooter} from "../nav/footer";
import {SourceSearch} from "../source/search";
import {HomeSlider} from "./slider";
import {HomeHighlight} from "./highlight";
import {HomePartner} from "./partner";
import {HomeRecommended} from "./recommended";
*/

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  /* TODO:deprecated;   
  directives: [
    NavHeader,
    NavBreadcrumb,
    NavFooter,
    HomeSlider,
    HomeHighlight,
    HomeRecommended,
    HomePartner,
    SourceSearch
  ],*/
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ require('./home.scss') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./home.html')
})
export class Home {
  // Set our default values
  localState = { value: '' };
  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
