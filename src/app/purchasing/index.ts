import {Component} from '@angular/core';
import {NavBreadcrumb} from "../nav/breadcrumb";
import {NavHeader} from "../nav/header";
import {NavFooter} from "../nav/footer";

export {PurchasingList} from "./list";
export {PurchasingShow} from "./show";
export {PurchasingDashboard} from "./dashboard";

@Component({
  selector: 'purchase',
  template: require('./index.html'),
  styles: [
    require('./index.scss')
  ],
  directives: [NavBreadcrumb, NavHeader, NavFooter]
})

export class Purchasing {
}
