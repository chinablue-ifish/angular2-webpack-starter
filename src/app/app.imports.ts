//import { XLarge } from './x-large';
import {NavHeader} from "./nav/header";
import {NavBreadcrumb} from "./nav/breadcrumb";
import {NavFooter} from "./nav/footer";
import {SourceSearch} from "./source/search";
import {HomeSlider} from "./home/slider";
import {HomeHighlight} from "./home/highlight";
import {HomePartner} from "./home/partner";
import {HomeRecommended} from "./home/recommended";
import {Source} from "./source/index";
import {UserStatus} from "./user/status";
import {DecodeUriPipe} from './_shared/pipes/decode-uri-pipe';
import {TrustAsImgUrlPipe} from './_shared/pipes/trust-as-img-url';
import {UrlStrengthPipe} from './_shared/pipes/UrlStrength';
import {PersonalInfoModal} from "./user/modal/personal-info-modal";
import {ModifyPasswordModal} from "./user/modal/modify-password-modal";
import {ForgetPasswordDialog} from "./user/dialog/forget-password-dialog";
import {Chart} from './_shared/components/chart';
import {DatePipe} from './purchasing/datePipe';
import {SourceList} from "./source/list";
import {AquaticLevelImgPipe} from "./source/aquatic-level-img-pipe";
import {RegionTransformationPipe} from "./_shared/pipes/regionTransformationPipe";
import {PaginationDemoComponent} from "./_shared/components/pagination";
import {PurchasingConfirmDialog} from "./source/dialog/dialog";
import {SourceShow} from "./source/show";
import {SourceBase} from "./source/base";
import {SourceLevel} from "./source/level";
import {AquaticLevelPipe} from "./source/aquatic-level-pipe";
import {CircularProgress} from "./_shared/directives/circular-progress";
import {SourceReport} from "./source/report";
import {SourceMore} from "./source/more";
import {GradeModal} from "./source/grade-modal";
import {Purchasing} from "./purchasing/index";
import {PurchasingList} from "./purchasing/list";
import {OrderStatusPipe} from "./_shared/pipes/OrderStatusPipe";
import {DeletePurchasingOrderDialog} from "./purchasing/dialog/delete-purchasing-order-dialog";
import {DeletePurchasingOrderItemDialog} from "./purchasing/dialog/delete-order-item-dialog";
import {CompletePurchasingOrderDialog} from "./purchasing/dialog/complete-purchasing-order-dialog";
import {PurchasingDashboard} from "./purchasing/dashboard";
import {PurchasingShow} from "./purchasing/show";
import {ShowVendors} from "./purchasing/show-vendors";
import {SelectVendorDialog} from "./purchasing/dialog/select-vendor-dialog";


export const UserImports = [

  SelectVendorDialog,
  ShowVendors,
  PurchasingShow,
  PurchasingDashboard,
  CompletePurchasingOrderDialog,
  DeletePurchasingOrderItemDialog,
  DeletePurchasingOrderDialog,
  OrderStatusPipe,
  PurchasingList,
  Purchasing,
  GradeModal,
  SourceMore,
  SourceReport,
  CircularProgress,
  AquaticLevelPipe,
  SourceBase,
  Source,
  SourceLevel,
  SourceShow,
  PurchasingConfirmDialog,
  PaginationDemoComponent,
  RegionTransformationPipe,
  AquaticLevelImgPipe,
  SourceList,
  DatePipe,
  Chart,
  ForgetPasswordDialog,
  PersonalInfoModal,
  ModifyPasswordModal,
  DecodeUriPipe,
  TrustAsImgUrlPipe,
  UrlStrengthPipe,
  NavHeader,
  NavBreadcrumb,
  NavFooter,
  SourceSearch,
  HomeSlider,
  HomeHighlight,
  HomePartner,
  HomeRecommended,
  Source,
  UserStatus
]
