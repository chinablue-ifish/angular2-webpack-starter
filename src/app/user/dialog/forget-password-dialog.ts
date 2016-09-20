import {Component, Output, Input, EventEmitter} from '@angular/core';
import {Auth} from "../../_shared/api/Auth";

@Component({
  selector: 'forget-password-dialog',
  styles: [require('./forget-password-dialog.scss')],
  template: require('./forget-password-dialog.html')
})

export class ForgetPasswordDialog {
  constructor(private auth:Auth) {

  }

  @Output() cancelDialogRequest = new EventEmitter();
  myemail:string;
  error:string;
  success:string;

  ngOnInit() {
    this.myemail = "";
  }

  cancelDialog() {
    this.cancelDialogRequest.emit(1);
  }


  submit() {
    this.error = '';
    this.myemail = this.myemail && this.myemail.trim();
    if (!this.myemail){
      this.error = '格式有误';
      return false;
    }
    this.auth.forgetPassword(this.myemail).then(r => {
      if(r.status){
        this.success = '邮件已发送，请查收！';
        this.showPromptAfterSubmit();
      }else{
        this.error = r.error;
      }
    });
  }

  showPromptAfterSubmit() {
    setTimeout(()=> {
      this.cancelDialog();
    }, 2000);
  }

}
