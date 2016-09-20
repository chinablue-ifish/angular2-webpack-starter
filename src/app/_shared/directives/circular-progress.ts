import {Directive, OnInit, Input, ElementRef} from "@angular/core";

@Directive({
  selector: 'canvas[circular-progress]'
})
export class CircularProgress implements OnInit {
  constructor(private canvas:ElementRef) {
  }

  @Input() value:number;
  @Input() minValue:number = 0;
  @Input() maxValue:number = 1;
  @Input() level;
  @Input() levelColors = {
    a: '#317CC0',
    b: '#488618',
    c: '#D39601',
    d: '#BABABA',
  };

  backgroundColor = '#f4f4f4';
  centerX:number = 50;
  centerY:number = 50;

  width:number = 10;

  get percent():number {
    let percent = Math.round((this.value - this.minValue) / (this.maxValue - this.minValue) * 10000) / 10000;
    if (percent < 0) {
      percent = 0;
    }
    return percent;
  }

  get colorByLevel():string {
    return this.levelColors[this.level];
  }

  get radius():number {
    return 50 - this.width / 2;
  }

  get startAngle():number {
    return -0.5 * Math.PI;
  }

  get endAngle():number {
    return (this.percent * 2 - 0.5) * Math.PI;
  }

  redraw() {
    var context:CanvasRenderingContext2D = this.canvas.nativeElement.getContext('2d');
    context.clearRect(0, 0, 100, 100);
    this.drawBackground(context);
    this.drawArc(context);
    this.drawText(context);
  }

  private drawArc(context:CanvasRenderingContext2D) {
    context.strokeStyle = this.colorByLevel;
    context.lineWidth = this.width;
    context.lineCap = 'round';
    context.beginPath();
    context.arc(this.centerX, this.centerY, this.radius, this.startAngle, this.endAngle);
    context.stroke();
  }

  private drawText(context:CanvasRenderingContext2D) {
    var text = (this.percent * 100).toFixed(2);
    context.restore();
    context.font = '16px';
    context.fillStyle = 'black';
    context.textBaseline = 'middle';
    var textWidth = context.measureText(text).width;
    var textX = (100 - textWidth) / 2;
    context.fillText(text, textX, this.centerY);
  }

  private drawBackground(context:CanvasRenderingContext2D) {
    if (this.percent == 1) return true;
    context.strokeStyle = this.backgroundColor;
    context.lineWidth = this.width;
    context.lineCap = 'round';
    context.beginPath();
    context.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI);
    context.stroke();
  }

  ngOnInit() {
    if (this.level) {
      this.level = this.level.toLowerCase();
    }
    this.redraw();
  }

  ngOnChanges() {
    this.redraw();
  }
}
