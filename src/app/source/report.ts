import {Component, OnInit, Input} from "@angular/core";

@Component({
  selector: 'source-report',
  template: require('./report.html'),
  styles: [
    require('./report.scss')
  ]
})
export class SourceReport implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  @Input() source;
}
