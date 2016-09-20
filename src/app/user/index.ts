import {Component} from "@angular/core";
import {NavFooter} from "../nav/footer";
import {NavHeader} from "../nav/header";

export {UserLogin} from './login';
export {UserRegister} from './register';

@Component({
  selector: 'user',
  template: require('./index.html'),
  styles: [
    require('./index.scss')
  ],
  directives: [NavHeader, NavFooter]
})
export class User {

}
