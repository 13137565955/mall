import {
  request
} from './request'
export function getDetaildata(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc; //评论
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc; //促销价 打折等
    this.columns = columns; //"销量 3887","收藏76人","默认快递"  
    this.services = services; //7天无理由  包邮
    this.nowPrice = itemInfo.highNowPrice;
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells; //销量
    this.score = shopInfo.score; //描述相符 评价高低
    this.goodsCount = shopInfo.cGoods //全部宝贝
  }
}
