import {Component, OnInit, Input} from "@angular/core";
import {CircularProgress} from "../_shared/directives/circular-progress";
import {AquaticLevelImgPipe} from "./aquatic-level-img-pipe";
import {TrustAsImgUrlPipe} from "../_shared/pipes/trust-as-img-url";
import {AquaticLevelPipe} from "./aquatic-level-pipe";

@Component({
  selector: 'source-level',
  template: require('./level.html'),
  styles: [
    require('./level.scss')
  ],
  directives: [CircularProgress],
  pipes: [AquaticLevelImgPipe, TrustAsImgUrlPipe, AquaticLevelPipe]
})
export class SourceLevel implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  @Input() source;
}
