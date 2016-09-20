import {Component, Output, Input, EventEmitter} from '@angular/core';
import {AquaticSourceItems} from "../../_shared/api/AquaticSourceItems";

@Component({
  selector: 'select-vendor-dialog',
  styles: [require('./dialog.scss')],
  template: require('./select-vendor-dialog.html'),
  providers: [AquaticSourceItems]
})
export class SelectVendorDialog {

  constructor(private aquaticSourceItems:AquaticSourceItems) {

  }

  @Input() vendorInfo;
  @Input() item;
  @Output() cancelDialogRequest = new EventEmitter();
  @Output() vendorNamesChange = new EventEmitter();

  error;

  ngOnInit() {

  }

  cancelDialog() {
    this.cancelDialogRequest.emit(1);
  }

  updateSourceVendorMaps() {
    let waiteUpdateItems = this.vendorInfo.filter(ele => {
      return ele.checked;
    }), vendorNames = "";
    if (waiteUpdateItems[0]) {
      vendorNames = waiteUpdateItems.reduce((pre, cur)=> {
        if (pre) {
          if (cur.company) pre += "," + cur.company;
        }
        else pre = cur.company;
        return pre;
      }, "");
      this.aquaticSourceItems.updateVendorNames(this.item.id, vendorNames).then(r => {
        if (r) {
          this.vendorNamesChange.emit(vendorNames && vendorNames.split(','));
          this.cancelDialog();
        }
      });
    } else {
      this.error = '请选择一个供应商';
    }
  }
}
