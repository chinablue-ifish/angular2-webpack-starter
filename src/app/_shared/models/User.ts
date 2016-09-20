// 用户
import {Vendor} from "./Vendor";
import {Customer} from "./Customer";
import {Role} from "../consts/EnumRole";
export interface User {
  id?:number;
  // 邮箱
  email?:string;
  // 密码
  password?:string;
  // 手机
  mobile?:string;
  // 公司名
  company?:string;
  // 地址
  address?:string;
  // 用户名
  userName?:string;
  // 角色
  role?:Role;
  // 采购商
  customer?:Customer;
  // 供应商
  vendor?:Vendor;
  // 创建日期
  createdTime?:Date;
  // 更新日期
  updatedTime?:Date;
  // 确认密码
  confirmPassword?:string;
}
