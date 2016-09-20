import {AquaticBaseInfo} from "./AquaticBaseInfo";
import {Vendor} from "./Vendor";
// 订单条目
export interface PurchasingOrderItem {
  id?: number;

  // 水产基本信息
  aquaticBaseInfo?: AquaticBaseInfo;

  // 供应商
  vendor?: Vendor;
}
