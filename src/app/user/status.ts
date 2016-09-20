import {Component, OnInit} from '@angular/core';
import {Auth} from "../_shared/api/Auth";
import {Router} from '@angular/router';

//TODO:deprecated;    import {CORE_DIRECTIVES} from '@angular/common';
//TODO:deprecated;   import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap';  //deprecated, use Ng2BootstrapModule in app.module.ts


@Component({
  selector: 'user-status',
  template: require('./status.html'),
  styles: [
    require('./status.scss')
  ],
  //TODO:deprecated;   viewProviders: [BS_VIEW_PROVIDERS], 
})
export class UserStatus implements OnInit {
  constructor(private auth:Auth, private router:Router) {
  }

  cacheNavigation;
  showPopup;
  userInfo;

  ngOnInit() {
    this.cacheNavigation = document.location.hash;
    this.userInfo = this.auth.me || {};
  }

  logout($event) {
    $event.preventDefault();
    this.auth.logout().then(() => {
      this.router.navigate(['/']);
    });
  }

  showPersonalPopup() {
    this.showPopup = !this.showPopup;
  }
}
