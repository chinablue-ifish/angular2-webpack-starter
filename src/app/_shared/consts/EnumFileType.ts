// 文件类型
export enum FileType {
  //* 营业执照
  BUSINESS_LICENSE,
  /**
   * 税务登记证
   */
  TAX_REG_LICENSE,
  /**
   * 组织机构代码证
   */
  ORG_CODE_LICENSE,
  /**
   * 注册资本许可证
   */
  REG_CAPITAL_LICENSE,
  /**
   *
   */
  VENDOR_INFO,
  /**
   * 代理商证明
   */
  ACTING_PROVE,
  /**
   * 提案书
   */
  PROPOSAL_SHEET,
  /**
   * 提案书其他
   */
  PROPOSAL_OTHER,
  /**
   * 报价单
   */
  PRICE_SHEET,
  /**
   * 法人代表
   */
  CORPORATE_REPRESENT,
  /**
   * 图片(不作为文件类型保存到数据库，只作为上传校验用)
   */
  IMAGE,
  /**
   * 文件(不作为文件类型保存到数据库，只作为上\传校验用)
   */
  FILE,
  /**
   * 立项中的附件
   */
  CREATE_PROJECT_ATTACH,
  /**
   * 立项中需求描述的附件
   */
  REQUIRE_DESC_ATTACH,
  /**
   * 评价图片
   */
  EVA_PIC,
  /**
   * 评价缩略图
   */
  EVA_THUMB_PIC,
  /**
   * 废标申请图片
   */
  ABOLISH_PIC,
  /**
   * 最终报价单
   */
  FINAL_PRICE,

  /**
   * 供应商资讯
   */
  VENDOR_NEWS
}
