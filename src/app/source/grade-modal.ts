import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'grade-modal',
  template: require('./grade-modal.html'),
  styles: [
    require('./grade-modal.scss')
  ]
})
export class GradeModal {

  constructor() {
  }

  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  doClose() {
    this.close.emit(false);
  }
}
