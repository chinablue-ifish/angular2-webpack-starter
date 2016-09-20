import {Pipe, PipeTransform} from '@angular/core';
const urlHead = '/ifishimage/';
@Pipe({name: "urlStrength"})
export class UrlStrengthPipe implements PipeTransform {

  transform(base:string) {
    return urlHead + base;
  }
}

