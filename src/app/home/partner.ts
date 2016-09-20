import { Component, OnInit } from '@angular/core';
//TODO:deprecated;   import {TrustAsImgUrlPipe} from '../_shared/pipes/trust-as-img-url';

@Component({
  selector: 'home-partner',
  template: require('./partner.html'),
  styles: [
    require('./partner.scss')
  ],
  //TODO:deprecated;   pipes: [TrustAsImgUrlPipe]
})
export class HomePartner implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  partners = [
    {
      logo: require('./_images/partners/Disney.png'),
      name: 'Disney',
      url: 'http://www.dol.cn'
    },
    {
      logo: require('./_images/partners/IfishLogo.png'),
      name: 'China Blue',
      url: 'http://www.chinabluesustainability.org/'
    },
    {
      logo: require('./_images/partners/Liuxie.png'),
      name: '中国水产流通与加工协会',
      url: 'http://www.cappma.org/'
    },
    {
      logo: require('./_images/partners/SHOU.png'),
      name: '上海海洋大学',
      url: 'http://www.shou.edu.cn/'
    },
    {
      logo: require('./_images/partners/ThoughtWorks.png'),
      name: 'ThoughtWorks',
      url: 'https://www.thoughtworks.com/cn'
    },
  ];
}
