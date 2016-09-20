import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'source-more',
  template: require('./more.html'),
  styles: [
    require('./more.scss')
  ]
})
export class SourceMore implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
  @Input() source;
}
