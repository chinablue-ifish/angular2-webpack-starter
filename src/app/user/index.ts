import {Component} from "@angular/core";


export {UserLogin} from './login';
export {UserRegister} from './register';

@Component({
  selector: 'user',
  template: require('./index.html'),
  styles: [
    require('./index.scss')
  ]
})
export class User {

}
