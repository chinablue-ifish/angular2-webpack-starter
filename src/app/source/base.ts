import {Component, OnInit, Input} from "@angular/core";
import {AquaticSource} from "../_shared/models/AquaticSource";


@Component({
  selector: 'source-base',
  template: require('./base.html'),
  styles: [
    require('./base.scss')
  ],
})
export class SourceBase implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  @Input() source:AquaticSource;
}
