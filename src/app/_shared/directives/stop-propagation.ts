import {Directive, HostListener} from '@angular/core';
@Directive({
  selector: '[stop-propagation]'
})
export class StopPropagationDirective {
  constructor() {

  }

  @HostListener('click', ['$event'])
  onClick($event) {
    $event.stopPropagation();
  }
}
