import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {User} from "../models/User";
import {RegisterForm} from "../models/RegisterForm";

@Injectable()
export class Auth {
  constructor(private http:Http) {
    this.checkLogin();
  }

  me:User = {};

  get loggedIn():boolean {
    return !!this.me.email || !!this.me.userName;
  }

  ngOnInit() {
    this.checkLogin();
  }

  checkLogin() {
    return this.http.get('/api/users/getUserInfo').toPromise().then(
      (resp:Response)=> {
        this.me = resp.json();
      }
    ).catch((error)=> {
      console.error(error);
    });
  }

  login(email:string, password:string) {
    return this.http.post('/api/login', `email=${email}&password=${password}`, {headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})}).toPromise().then((data:Response)=> {
      var user = data.json();
      this.me = {userName: user.userName, id: user.id, email: email, role: user.role};
      this.checkLogin();
      return this.me;
    });
  }

  forgetPassword(email:string){
    return this.http.post('/api/forgetPassword', JSON.stringify({email:email}), {headers: new Headers({'Content-Type': 'application/json'})}).toPromise().then(data=> {
      if (data.ok) {
        return {status: true, error: null};
      } else {
        return {status: false, error: "没有此邮箱，请重新输入！"};
      }
    }).catch((res)=> {
      return {status: false, error: "没有此邮箱，请重新输入！"};
    });
  }

  activated(code:string) {
    return this.http.get(`/api/activate/${code}`).toPromise().then((res:Response)=> {
      if (res.ok) return  {status: true, error: ""};
      else return  {status: true, error: res.json().msg};
    }).catch(e=> {
      return {status: false, error: JSON.parse(e._body).msg};
    });
  }

  logout() {
    return this.http.post('/api/logout', '').toPromise().then(() => {
      this.me = {};
      return this.me;
    });
  }

  register(form:RegisterForm) {
    return this.http.post('/api/register', JSON.stringify(form), {headers: new Headers({'Content-Type': 'application/json'})}).toPromise().then(data=> {
      if (data.ok) {
        var user = data.json();
        this.me = {userName: user.userName, id: user.id};
        return {status: true, error: null};
      } else {
        this.me = {};
        return {status: false, error: null};
      }
    }).catch((res)=> {
      this.me = {};
      return {status: false, error: res._body};
    });
  }

  modifyPassword(op, np) {
    return this.http.post('/api/changePassword', JSON.stringify({
      password: op,
      resetPassword: np
    }), {headers: new Headers({'Content-Type': 'application/json'})}).toPromise().then(res=> {
      return res;
    }).catch(e=> {
      console.log('error ,', e);
      return e;
    });
  }

  modifyPersonalInfo(mobile, company, address) {
    return this.http.post('/api/customer/update', JSON.stringify({
      mobile: mobile || '',
      company: company || '',
      address: address || ''
    }), {headers: new Headers({'Content-Type': 'application/json'})}).toPromise().then(res=> {
      if (res.ok) {
        this.me.mobile = mobile;
        this.me.company = company;
        this.me.address = address;
      }
      return res.ok;
    }).catch(e=> {
      console.log('error ,', e)
    });
  }
}
