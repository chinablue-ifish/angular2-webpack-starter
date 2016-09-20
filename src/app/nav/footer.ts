import {Component, OnInit} from "@angular/core";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'nav-footer',
  template: require('./footer.html'),
  styles: [
    require('./footer.scss')
  ],
  directives: [RouterLink]
})
export class NavFooter implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
