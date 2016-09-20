import { Pipe, PipeTransform } from '@angular/core';

const StatusMap = {
  DOING: '采购中',
  DONE: '采购完成'
};
@Pipe({
  name: 'orderStatus'
})
export class OrderStatusPipe implements PipeTransform {
  transform(value?:string):string {
    if (!value) {
      return '';
    }
    return StatusMap[value] || value;
  }
}
