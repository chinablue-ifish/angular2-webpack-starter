// 鱼的图片
import {FileType} from "../consts/EnumFileType";
export interface IFishImage {

  id?: number;

  // 类型
  type?: FileType;

  // 地址
  url?: string;
}
