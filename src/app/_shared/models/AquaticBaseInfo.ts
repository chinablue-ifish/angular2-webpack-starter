import {AquaticSource} from "./AquaticSource";
import {AquaticCategory} from "./AquaticCategory";

// 水产基本信息（品种信息）
export interface AquaticBaseInfo {

  id?:number;

  // 水产分类
  aquaticCategory?:AquaticCategory;

  // 俗名
  commonName?:string;

  // 中文名
  chineseName?:string;

  // 英文名
  englishName?:string;

  // 图片
  imgUrl?:string;

  // 对外编码
  outerCode?:string;

  // 所属区域
  regionName?:string;

  // 科学名
  scientificName?:string;

  // 创建时间
  createdTime?:Date;
  // 更新时间
  updatedTime?:Date;

  // 具体的货物
  sources?:AquaticSource[];
}
