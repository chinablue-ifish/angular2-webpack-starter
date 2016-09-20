import {Component, Input} from '@angular/core';
import {Auth} from "../../_shared/api/Auth";


@Component({
  selector: 'personal-info-modal',
  styles: [require('./modal.scss')],
  template: require('./personal-info-modal.html')
})
export class PersonalInfoModal {

  constructor(private auth:Auth) {
  }

  @Input() lgModal;

  error;
  success;
  form;

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = {
      mobile: this.auth.me.mobile || null,
      company: this.auth.me.company || null,
      address: this.auth.me.address || null
    };
  }


  submit() {
    this.auth.modifyPersonalInfo(this.form.mobile, this.form.company, this.form.address).then(r=> {
      if (r) {
        this.success = '修改成功!';
        setTimeout(()=> {
          this.cancel();
        }, 1500);
      } else {
        this.error = '修改失败,请重试!'
      }
    });
  }

  cancel() {
    this.error = null;
    this.success = null;
    this.initForm();
    this.lgModal.hide();
  }
}
