import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {UserStatus} from '../user/status';
import {Auth} from '../_shared/api/Auth';

@Component({
  selector: 'nav-header',
  template: require('./header.html'),
  styles: [
    require('./header.scss')
  ],
  directives: [RouterLink, UserStatus]
})
export class NavHeader implements OnInit {
  constructor(private auth: Auth) {
  }

  ngOnInit() {
  }

}
