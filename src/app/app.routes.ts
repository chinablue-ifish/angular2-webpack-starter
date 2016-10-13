import {Routes, RouterModule} from '@angular/router';
import {Home} from './home';
import {NoContent} from './no-content';

import {DataResolver} from './app.resolver';
import {Source} from "./source/index";
import {Purchasing} from "./purchasing/index";
import {SourceShow} from "./source/show";
import {SourceList} from "./source/list";
import {PurchasingList} from "./purchasing/list";
import {PurchasingDashboard} from "./purchasing/dashboard";
import {PurchasingShow} from "./purchasing/show";
import {User} from "./user/index";
import {UserLogin} from "./user/login";
import {UserRegister} from "./user/register";
import {UserActivate} from "./user/activate";
import {Help} from "./help/index";
import {HelpLegacy} from "./help/legacy";
import {HelpCenter} from "./help/center";
import {HelpContact} from "./help/contact";
import {EvaluationMethod} from "./evaluation/evaluation-method";
import {Tao} from "./tao/index";
import {About} from "./about/about";

export const ROUTES:Routes = [
  {path: '', pathMatch: 'full', component: Home, data: {title: '首页'}},
  {
    path: 'source',
    component: Source,
    children: [
      {path: 'list', component: SourceList, data: {title: '水产品搜索'}},
      {path: 'category', component: SourceList, data: {title: '水产品分类'}},
      {path: 'show', component: SourceShow, data: {title: '水产品详情'}}
    ]
  },
  {
    path: 'purchasing',
    component: Purchasing,
    children: [
      {path: '', component: PurchasingList, data: {title: '采购列表'}},
      {path: 'list', component: PurchasingList, data: {title: '采购列表'}},
      {path: 'dashboard', component: PurchasingDashboard, data: {title: '采购详情-统计图'}},
      {path: 'show', component: PurchasingShow, data: {title: '采购详情'}}
    ]
  },
  {
    path: 'user',
    component: User,
    children: [
      {path: 'login', component: UserLogin, data: {title: '用户登录'}},
      {path: 'register', component: UserRegister, data: {title: '用户注册'}},
      {path: 'activate/:code', component: UserActivate, data: {title: '用户激活'}},
    ]
  },
  {
    path: 'help',
    component: Help,
    children: [
      {path: 'legacy', component: HelpLegacy, data: {title: '免责声明'}},
      {path: 'center', component: HelpCenter, data: {title: '帮助中心'}},
      {path: 'contact', component: HelpContact, data: {title: '联系我们'}},
    ]
  },
  {path: 'evaluation', component: EvaluationMethod, data: {title: '评级指标'}},
  {path: 'about', component: About, data: {title: '关于我们'}},
  {path: 'tao', component: Tao, data: {title: '我们的理念'}},
  {path: '**', component: NoContent}
];


//   [
//   { path: '',      component: Home },
//   { path: 'home',  component: Home },
//   { path: 'about', component: About },
//   {
//     path: 'detail', loadChildren: () => System.import('./+detail')
//   },
//   { path: '**',    component: NoContent },
//
// ];
