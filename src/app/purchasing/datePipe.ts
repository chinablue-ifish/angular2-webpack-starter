import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: "dateCustomization"})
export class DatePipe implements PipeTransform {

  transform(value:any, args:any):any {
    let date = new Date(value);
    return date.getFullYear() + "/" + addDigital(date.getMonth() + 1) + "/" + addDigital(date.getDate());

    function addDigital(value) {
      value = +value;
      if (value < 10) return "0" + value;
      else return "" + value;
    }
  }
}
