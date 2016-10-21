import {Component, OnInit, Input} from "@angular/core";
import {Auth} from "../_shared/api/Auth";

@Component({
  selector: 'source-report',
  template: require('./report.html'),
  styles: [
    require('./report.scss')
  ]
})
export class SourceReport implements OnInit {
  constructor(private auth:Auth) {
  }

  ngOnInit() {
  }

  @Input() source;
}
