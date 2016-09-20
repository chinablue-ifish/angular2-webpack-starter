import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name: "regionTransformation"})
export class RegionTransformationPipe implements PipeTransform {

  transform(n:string) {
    return n == '1' ? '国产' : '进口';
  }
}

