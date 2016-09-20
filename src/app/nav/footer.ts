import {Component, OnInit} from "@angular/core";
// import {RouterLink} from "@angular/router"; //TODO:deprecated

@Component({
  selector: 'nav-footer',
  template: require('./footer.html'),
  styles: [
    require('./footer.scss')
  ],
  //directives: [RouterLink] //TODO:deprecated
})
export class NavFooter implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
