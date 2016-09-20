import {Component, OnInit, Input} from "@angular/core";


@Component({
  selector: 'source-level',
  template: require('./level.html'),
  styles: [
    require('./level.scss')
  ],
})
export class SourceLevel implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  @Input() source;
}
