import {Pipe, PipeTransform} from "@angular/core";
const LevelImages = {
  'A': require('./_images/levels/best.png'),
  'B': require('./_images/levels/good.png'),
  'C': require('./_images/levels/acceptable.png'),
  'D': require('./_images/levels/general.png'),
};

@Pipe({name: 'aquaticLevelImg'})
export class AquaticLevelImgPipe implements PipeTransform {
  transform(value: any): any {
    if (!value || value.length > 1) {
      return "";
    }
    value = value.toUpperCase();
    if (LevelImages[value]) {
      return LevelImages[value];
    }
    else {
      return "";
    }
  }
}
