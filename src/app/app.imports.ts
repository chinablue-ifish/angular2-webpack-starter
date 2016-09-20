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


export const UserImports = [
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
