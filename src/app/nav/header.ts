import {Component, OnInit} from '@angular/core';
//import {RouterLink} from '@angular/router'; //deprecated
//import {UserStatus} from '../user/status'; //deprecated
import {Auth} from '../_shared/api/Auth';

@Component({
  selector: 'nav-header',
  template: require('./header.html'),
  styles: [
    require('./header.scss')
  ],
  //directives: [RouterLink, UserStatus] //deprecated
})
export class NavHeader implements OnInit {
  constructor(private auth: Auth) {
  }

  ngOnInit() {
  }

}
