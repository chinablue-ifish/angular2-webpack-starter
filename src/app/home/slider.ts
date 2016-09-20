import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router} from '@angular/router';
//TODO:deprecated;   import {CAROUSEL_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
//TODO:deprecated;   import {TrustAsImgUrlPipe} from '../_shared/pipes/trust-as-img-url';

@Component({
  selector: 'home-slider',
  template: require('./slider.html'),
  styles: [
    require('./slider.scss')
  ],
  //TODO:deprecated;   directives: [CAROUSEL_DIRECTIVES],
  //TODO:deprecated;   pipes: [TrustAsImgUrlPipe],
})
export class HomeSlider implements OnInit, OnDestroy {
  constructor(private router: Router) {
  }

  timer;

  ngOnInit() {
    this.selection = this.sliders[0];
    this.timer = setInterval(()=> {
      this.next();
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  selection:Object;

  selected(slider) {
    return slider === this.selection;
  }

  select(slider) {
    this.selection = slider;
  }

  moving:boolean = false;

  move(step:number) {
    if (this.moving) {
      return;
    }
    this.moving = true;
    var index = this.sliders.indexOf(this.selection);
    index = (index + step + this.sliders.length) % this.sliders.length;
    this.selection = this.sliders[index];
    this.moving = false;
  }

  prev() {
    this.move(-1);
  }

  next() {
    this.move(1);
  }

  sliders:Object[] = [
    {
      image: require('./_images/banners/banner-1.png'),
      logo: require('./_images/banners/logo-1.svg'),
      active: true,
      title: '渔之有道',
      description: '那些在积极寻求改变的渔农，或自发成立巡湖护河小组，监督和抵制非法捕鱼行为，或引进环保设备技术，加强养殖用水和排水的净化节约，或学习负责任的捕捞和养殖手段，避免捕捞幼鱼、过度使用药物……',
      more: '/tao',
      moreParams: {type: 'catch'}
    },
    {
      image: require('./_images/banners/banner-2.png'),
      logo: require('./_images/banners/logo-2.svg'),
      title: '食之有道',
      description: '我们对食物的热情会引导我们由关注食材安全和品质，逐渐向关注食物生产、加工和流通过程中的生态足迹和社会影响过渡，让我们从传统朴素的食物情怀走向真正可持续的饮食之道',
      more: '/tao',
      moreParams: {type: 'eat'}
    },
    {
      image: require('./_images/banners/banner-3.png'),
      logo: require('./_images/banners/logo-3.svg'),
      title: '采之有道',
      description: '与传统水产码头批发市场不同，大型零售商和采购商具有引导水产供应链优化升级的市场影响力，需要快速识别和筛选市场上更具可持续性的水产品及志同道合的供应商，优化采购方案，引导供应商向更可持续的生产模式改进',
      more: '/tao',
      moreParams: {type: 'feed'}
    },
  ]
}
