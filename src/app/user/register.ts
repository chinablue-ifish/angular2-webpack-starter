import {Component, OnInit} from "@angular/core";
import {Auth} from "../_shared/api/Auth";
import {Router, ActivatedRoute, RouterLink} from "@angular/router";
import {RegisterForm} from "../_shared/models/RegisterForm";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

const emailRegex = '^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$';
const emailValidator = new RegExp(emailRegex, 'i');

@Component({
  selector: 'user-register',
  template: require('./register.html'),
  styles: [
    require('./register.scss')
  ],
})
export class UserRegister implements OnInit {

  form:RegisterForm = {};
  navigation;
  error;
  myForm:FormGroup;

  constructor(private router:Router, private auth:Auth, private route:ActivatedRoute, fb:FormBuilder) {
    const self = this;
    this.myForm = fb.group({
      email: ['', Validators.compose([Validators.required, emailValidator])],
      password: ['', Validators.compose([Validators.required, passwordlValidator])],
      confirmPassword: ['', Validators.compose([Validators.required, passwordlValidator])]
    });

    function emailValidator(control:FormControl):{ [s:string]:boolean } {
      if (!self.emailValidate(control.value)) {
        return {invalidEmail: true};
      }
    }

    function passwordlValidator(control:FormControl):{ [s:string]:boolean } {
      if (!self.passwordValidate(control.value)) {
        return {invalidPassword: true};
      }
    }
  }

  ngOnInit() {
    this.navigation = this.route.snapshot.params['cacheNavigation'];
    if (this.navigation = 'true') this.navigation = '';
  }

  pathValidate(path) {
    let cachePath = ['/user/login', '/user/register', 'true'];
    return !!cachePath.find(ele => {
      return path.indexOf(ele) > -1;
    });
  }

  isActive(target:any) {
    return target == document.activeElement;
  }

  passwordValidate(password) {
    password = password || "";
    password = password.trim();
    if (!password) return false;
    return password.length >= 6 && password.length <= 20;
  }

  emailValidate(email) {
    return emailValidator.test(email);
  }

  submit() {
    this.error = null;
    if (this.form.password !== this.form.confirmPassword) {
      return this.error = '两次密码不一致，无法注册';
    }
    this.form.confirmPassword = null;
    console.log('path , ', this.navigation)
    this.auth.register(this.form).then((r)=> {
      if (r.error.match(/等待审核/) || r.status) {
        if (this.navigation && !this.pathValidate(this.navigation)) {
          return document.location.href = this.navigation;
        }
        this.router.navigate(['/']);
      } else {
        this.error = JSON.parse(r.error).msg;
      }
    });
  }
}
