import {Component, OnInit} from '@angular/core';
import {Auth} from "../_shared/api/Auth";
import {Router} from '@angular/router';
import {PersonalInfoModal} from "./modal/personal-info-modal";
import {CORE_DIRECTIVES} from '@angular/common';
import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap';
import {ModifyPasswordModal} from "./modal/modify-password-modal";

@Component({
  selector: 'user-status',
  template: require('./status.html'),
  styles: [
    require('./status.scss')
  ],
  viewProviders: [BS_VIEW_PROVIDERS],

  directives: [PersonalInfoModal, ModifyPasswordModal, MODAL_DIRECTVES, CORE_DIRECTIVES]
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
