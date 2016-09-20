import {Component, Input} from '@angular/core';
import {AquaticSourceVendorMaps} from '../_shared/api/AquaticSourceVendorMaps';
import {AquaticSourceItems} from '../_shared/api/AquaticSourceItems';


@Component({
  selector: "show-vendors",
  template: require("./show-vendors.html"),
  styles: [
    require('./show-vendors.scss')
  ]
})
export class ShowVendors {
  constructor(private sourceVendorMaps: AquaticSourceVendorMaps, private aquaticSourceItems: AquaticSourceItems) {

  }

  @Input() item;
  @Input() sourceId;
  @Input() orderStatus;

  pulledVendorInfo;
  showDialog = false;
  vendorNames;

  ngOnInit() {
    this.vendorNames = this.item.vendorNames && this.item.vendorNames.split(",");
  }

  viewVendorInfo() {
    this.showDialog = true;
    this.getSourceVendorMaps();
  }

  getSourceVendorMaps() {
    this.sourceVendorMaps.getVendorInfoBaySourceId(this.sourceId).then(data=> {
      this.pulledVendorInfo = data;
    });
  }

  cancelSelectVendorsDialog() {
    this.showDialog = false;
  }

  clearVendorNames(id: string) {
    this.aquaticSourceItems.updateVendorNames(this.item.id, null).then(r => {
      if (r) this.vendorNames = null;
    });
  }
}
