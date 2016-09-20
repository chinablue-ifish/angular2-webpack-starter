import {Customer} from "./Customer";
import {PurchasingOrderItem} from "./PurchasingOrderItem";
// 采购清单
export interface PurchasingOrder {
  id?:number;

  // 采购商
  customerId?:number;
  // 订单名称
  orderName?:string;

  // 条目
  // items?: PurchasingOrderItem[];
  itemId?:number;

  vendorId?:number;
  // 采购日期
  createdDate?:number;

  // 完成日期
  finishDate?:Date;
  // 订单状态
  orderStatus?:string;

  //采购水产品明细
  orderItems?:Array<any>;
}
