import {Component, ApplicationRef} from "@angular/core";
import {Subscription} from "rxjs/subscription";
import {Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {AquaticSources} from "../_shared/api/AquaticSources";
import {Auth} from "../_shared/api/Auth";
import {AquaticRegions} from "../_shared/api/AquaticRegions";
import {UrlPair} from "../_shared/utils/url-pair";
import {PurchasingOrders} from "../_shared/api/PurchasingOrders";
import {PurchasingOrder} from "../_shared/models/PurchasingOrder";

@Component({
  selector: 'aquatic-source-list',
  styles: [
    require('./list.scss')
  ],
  template: require('./list.html'),
  providers: [AquaticRegions],
})
export class SourceList {
  constructor(private sources:AquaticSources, private route:ActivatedRoute,
              private router:Router, private auth:Auth,
              private purchasingOrder:PurchasingOrders, private aquaticRegion:AquaticRegions,
              private applicationRef:ApplicationRef) {
  }

  showCategory=false;
  sourceCategorySummary;
  showDialog = false;
  currentSelectedItemId:string;
  items;
  keyword;
  purchasingOrderList;
  currentPage:number = 0;
  produce = {
    region: "",
    pattern: ""
  };

  patterns = [
    {title: '不限', value: '',},
    {title: '养殖', value: 'FEED',},
    {title: '捕捞', value: 'CATCH',},
    {title: '增殖', value: 'PROPAGATION',}
  ];
  regions = [
    {title: '不限', value: '',},
    {title: '进口', value: '0',},
    {title: '国产', value: '1',}
  ];
  quick_category = [
    {
      name: '鱼',
      keyword: '鱼',
      info:'鱼是很有营养的',
      imgUrl: "/aquatic/original/1705905101_ORGINAL.png",
      red: 5,
      yellow: 15,
      green: 9
    },
    {
      name: '虾',
      keyword: '虾',
      info:'虾很好吃',
      imgUrl: "/aquatic/original/2280100112_ORGINAL.png",
      red: 5,
      yellow: 15,
      green: 9
    },
    {
      name: '蟹',
      keyword: '蟹',
      info:'螃蟹比虾还好吃',
      imgUrl: "/aquatic/original/2311100302_ORGINAL.png",
      red:6,
      yellow:20,
      green:3
    },
    {
      name: '贝',
      keyword: '贝',
      info:'贝一般般',
      imgUrl: "/aquatic/original/3160803002_ORGINAL.png",
      red:8,
      yellow:7,
      green:2}
  ];

  navPaths:UrlPair[] = [
    {
      title: '搜索'
    }
  ];

  paramsSub:Subscription;
  pathSub:Subscription;

  ngOnInit() {
    this.initPurchasingOrder();
    //RxJS监听路由url的参数params变化,设置model并查询数据
    this.paramsSub = this.route.params.subscribe(params=> {
      this.reload(params);
    });
    //RxJS监听获取路由url,当路由为category的时候显示快速分类而非列表。
    this.pathSub = this.route.url.subscribe(urlseg=> {
      this.showCategory=('category'===urlseg[0].path);
      this.loadSourceCategorySummary();//刷新
    })
  }

  ngOnDestroy() {
    if (this.paramsSub) {
      this.paramsSub.unsubscribe();
    }
    if (this.pathSub) {
      this.pathSub.unsubscribe();
    }
  }

  reload(params) {
    this.produce.pattern = params['pattern'] || "";
    this.produce.region = params['region'] || "";
    if (this.produce.region == 'true') this.produce.region = '';
    if (this.produce.pattern == 'true') this.produce.pattern = '';
    this.keyword = params['keyword'] ? decodeURI(params['keyword']) : "";
    if (this.keyword === 'true') {
      this.keyword = '';
    }
    this.currentPage = +(params['page'] || 0);
    this.sources.query(this.keyword, this.produce.pattern, this.produce.region, this.currentPage);
  }

  loadSourceCategorySummary(){
    this.sources.getSummary().then((data)=> {
      console.log('loadSourceCategorySummary=> ');
      console.dir(data);
      data.forEach(item=>{
        console.dir(item);
        if(item.title.match('鱼')){
          item.imgUrl='/aquatic/original/1705905101_ORGINAL.png';
          item.keyword='鱼';
        }else if(item.title.match('虾')){
          item.imgUrl='/aquatic/original/2280100112_ORGINAL.png';
          item.keyword='虾';
        }else if(item.title.match('蟹')){
          item.imgUrl='/aquatic/original/2311100302_ORGINAL.png';
          item.keyword='蟹';
        }else if(item.title.match('藻')){
          item.imgUrl='/aquatic/original/2280100112_ORGINAL.png';
          item.keyword='藻';
        }else if(item.title.match('贝')){
          item.imgUrl='/aquatic/original/3160803002_ORGINAL.png';
          item.keyword='贝';
        }else if(item.title.match('其他')){
          item.imgUrl='/aquatic/original/2311100302_ORGINAL.png';
          item.keyword='其他';
        }
        let count={
          A:0,
          B:0,
          C:0,
          D:0
        };
        item.aquaticCategoryStatistics.forEach(d=>{
          console.dir(d);
          count[d[1]]=d[0]
        });
        item.aquaticCategoryStatisticsOK=count;
      });
      this.sourceCategorySummary=data;
    });
  }
  initPurchasingOrder() {
    setTimeout(()=> {
      if (this.auth.me && this.auth.me.email) {
        this.purchasingOrder.getPurchasingOrderList().then(r => {
          if (r) {
            this.purchasingOrderList = r.filter(ele=> {
              return ele.orderStatus != "DONE";
            }).sort((a:PurchasingOrder, b:PurchasingOrder):number=> {
              return b.createdDate - a.createdDate;
            });
          }
        });
      }
    }, 30);
  }

  search(key:string) {
    this.keyword = key;
    this.router.navigate(['/source/list', {
      keyword: encodeURI(this.keyword),
      pattern: this.produce.pattern,
      region: this.produce.region,
    }]);

  }

  numPageChanged(num:Number) {
    this.sources.query(this.keyword || '', this.produce.pattern, this.produce.region, num);
  }

  gotoPage(page:number) {
    this.currentPage = page;
    this.router.navigate(['/source/list', {
      keyword: encodeURI(this.keyword),
      pattern: this.produce.pattern,
      region: this.produce.region,
      page: page,
    }]);
  }

  gotoPurchasingConfirmDialog(id:string) {
    this.currentSelectedItemId = id;
    this.showDialog = true;

  }

  cancelPurchasingConfirmDialog() {
    this.showDialog = false;
    this.currentSelectedItemId = null;
  }

  broadsideProduceRegionFilter(region:string) {
    this.produce.region = region;
    this.router.navigate(['/source/list', {
      keyword: encodeURI(this.keyword),
      pattern: this.produce.pattern,
      region: this.produce.region
    }]);
  }

  broadsideProducePatternFilter(pattern:string) {
    this.produce.pattern = pattern;
    this.router.navigate(['/source/list', {
      keyword: encodeURI(this.keyword),
      pattern: this.produce.pattern,
      region: this.produce.region
    }]);
  }

  gotoSourceListByCategory(item) {
    this.router.navigate(['/source/list', {
      keyword: encodeURI(item.keyword)
    }]);
    ///  http://localhost:3000/#/source/list;keyword=%25E9%25B1%25BC;pattern=;region=
  }

  gotoAquaticDetails(id) {
    this.router.navigate(['/source/show', {
      id: id,
      keyword: encodeURI(this.keyword),
      pattern: this.produce.pattern,
      region: this.produce.region,
      page: this.currentPage,
    }]);
  }
}
