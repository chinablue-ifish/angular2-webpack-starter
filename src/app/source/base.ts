import {Component, OnInit, Input} from "@angular/core";
import {AquaticSource} from "../_shared/models/AquaticSource";

/* TODO: deprecated; 
import {UrlStrengthPipe} from "../_shared/pipes/UrlStrength";
import {TrustAsImgUrlPipe} from '../_shared/pipes/trust-as-img-url';
*/

@Component({
  selector: 'source-base',
  template: require('./base.html'),
  styles: [
    require('./base.scss')
  ],
  //TODO: deprecated;  pipes: [UrlStrengthPipe]
})
export class SourceBase implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  @Input() source:AquaticSource;
}
