import {Pipe, PipeTransform} from "@angular/core";
const LevelNames = {
  'A': '优异 Best',
  'B': '良好 Good',
  'C': '尚可 Acceptable',
  'D': '待评价 Unavailable',
};

@Pipe({name: 'aquaticLevel'})
export class AquaticLevelPipe implements PipeTransform {
  transform(value: any): any {
    if (!value || value.length > 1) {
      return "";
    }
    value = value.toUpperCase();
    return LevelNames[value];
  }
}
