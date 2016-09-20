import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

import {Subscription} from 'rxjs/Subscription';
import {Auth} from "../_shared/api/Auth";

@Component({
  selector: 'user-activate',
  template: require('./activate.html'),
  styles: [
    require('./activate.scss')
  ]
})
export class UserActivate implements OnInit {

  sub: Subscription;
  code: string;
  prompt: boolean = true;
  activated: boolean = false;
  showerror: boolean = false;
  errormsg:string;


  constructor(private route:ActivatedRoute, private router:Router,private auth:Auth) {
  }

  ngOnInit() {
    this.code = this.route.snapshot.params["code"];
    this.auth.activated(this.code).then(r => {
      if(r.status){
        this.prompt = false;
        this.activated = true;
      }else{
        this.prompt = false;
        this.showerror = true;
        this.errormsg = r.error;
      }
    });
  }
}
