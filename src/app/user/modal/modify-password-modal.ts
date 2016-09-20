import {Component, Input} from '@angular/core';
import {Auth} from "../../_shared/api/Auth";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'modify-password-modal',
  styles: [require('./modal.scss')],
  template: require('./modify-password-modal.html')
})
export class ModifyPasswordModal {

  constructor(private router:Router, private auth:Auth) {
  }

  @Input() lgModal;

  success;
  error;
  form;

  ngOnInit() {
    this.initForm();
  }

  submit() {
    if (!this.form.originalPassword || !this.form.newPassword || !this.form.confirmPassword) {
      this.error = '密码不能为空';
      return;
    }
    if (this.form.newPassword != this.form.confirmPassword) {
      this.error = '两次输入密码不一致';
      return false;
    }

    this.auth.modifyPassword(this.form.originalPassword, this.form.newPassword).then(r=> {
      if (r.ok) {
        this.error = null;
        this.success = '修改成功!';
        // this.auth.logout();
        setTimeout(()=> {
          this.cancel();
        }, 2000);
      } else {
        this.error = '修改失败! ' + r.json().msg;
      }
    });
  }

  initForm() {
    this.form = {
      originalPassword: null,
      newPassword: null,
      confirmPassword: null
    };
  }

  cancel() {
    this.error = null;
    this.success = null;
    this.initForm();
    this.lgModal.hide();
  }
}
