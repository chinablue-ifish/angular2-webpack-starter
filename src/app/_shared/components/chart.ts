import {Component, Input, ElementRef, OnInit, OnChanges} from "@angular/core";
import {DomSanitizationService, SafeUrl} from "@angular/platform-browser";
import {encode} from "../utils/base64";

import * as c3 from "c3";

const svgHeader = ' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" ';
@Component({
  selector: 'chart',
  template: '',
  styles: [
    require('./chart.scss')
  ]
})
export class Chart implements OnInit, OnChanges {
  @Input() data;
  @Input() options;

  chart:c3.Chart;

  constructor(private element:ElementRef, private sanitizer:DomSanitizationService) {

  }

  ngOnInit() {
    this.chart = c3.generate({
      bindto: this.element.nativeElement,
      data: this.data || {
        columns: [],
        type: 'donut'
      },
      legend: {
        position: 'right',
      },
      donut: {
        label: {
          format: function (value, ratio) {
            return Math.round(ratio * 100);
          }
        }
      }
    });
  }

  ngOnChanges():any {
    if (this.chart) {
      this.chart.load(this.data);
    }
  }

  toSvg():SafeUrl {
    if (!this.element.nativeElement.innerHTML) {
      return '';
    }
    const svg = this.element.nativeElement.innerHTML.replace(/^.*?<svg(.*?)<\/svg>.*$/, `<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg ${svgHeader} $1</svg>`);
    return this.sanitizer.bypassSecurityTrustUrl(`data:application/octet-stream;base64,${encode(svg)}`);
  }
}
