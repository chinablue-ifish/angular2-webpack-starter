// 供应商
export interface Vendor {
  id?: number;
  // 公司名称
  company?: string;
  // 公司地址
  address?: string;
  // 法人代表
  legalPerson: string;
  // 状态
  status: string;
  // 手机
  mobile: string;
  // BRC
  brc: string;
  // CoC
  coc: string;
  // Haccp
  haccp: string;
}
