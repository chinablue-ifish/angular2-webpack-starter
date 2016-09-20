import {PAGINATION_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {Component, Output, Input, EventEmitter} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
let template = require('./pagination.html');
import * as _ from 'lodash';

@Component({
  selector: 'pagination-entity',
  styles: [require('./pagination.scss')],
  directives: [PAGINATION_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES],
  template: template
})
export class PaginationDemoComponent {
  @Output() private numPages = new EventEmitter(false);
  @Input() bigTotalItems;
  public maxSize:number = 5;
  public bigCurrentPage:number = 1;
  public itemsPerPage:number = 10;

  public pageChanged(event:any):void {
    this.numPages.emit(event.page);
  };

  pages;
  @Input() currentPage = 0;
  @Output() currentPageChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
  }

  ngOnChanges() {
    let pages = Math.ceil(this.bigTotalItems / this.itemsPerPage);
    this.pages = _.times(pages, Number);
  }

  goto(num) {
    this.currentPage = num;
    this.currentPageChange.emit(num);
    this.numPages.emit(num);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.goto(this.currentPage);
    } else this.goto(1);
  }

  nextPage() {
    if (this.currentPage + 1 < this.pages.length) {
      this.currentPage += 1;
      this.goto(this.currentPage);
    } else this.goto(this.pages.length);
  }
}
