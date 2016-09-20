import {Component} from '@angular/core';

export {PurchasingList} from "./list";
export {PurchasingShow} from "./show";
export {PurchasingDashboard} from "./dashboard";

@Component({
  selector: 'purchase',
  template: require('./index.html'),
  styles: [
    require('./index.scss')
  ]
})

export class Purchasing {
}
