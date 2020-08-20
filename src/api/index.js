//加工ajax请求函数,使其进行定向请求指定数据

import Ajax from "@/server/ajax";
import MockAjax from "@/server/mockajax";

// const reqCategoryList = () => {
//   return Ajax.get('/product/getBaseCategoryList"');
// };
const reqCategoryList = () => {
  return Ajax({
    url: "/product/getBaseCategoryList",
    method: "GET",
  });
};

const reqBannerList = () => {
  return MockAjax({
    url: "/banner",
    method: "GET",
  });
};

const reqFloorList = () => {
  return MockAjax({
    url: "/floor",
    method: "GET",
  });
};

//searchParams代表搜索参数,这个参数必须要有,至少是一个没有属性的空对象
//参数如果是一个空对象,带吧搜索请求获取的是全部的数据
//参数如果有,代表获取是匹配后的数据
//code:201 参数有问题
const reqGoodsListInfo = (searchParams) => {
  return Ajax({
    url: "/list",
    method: "POST",
    data: searchParams,
  });
};

const reqGoodsDetailInfo = (skuId) => {
  return Ajax({
    url: `/item/${skuId}`,
    method: "GET",
  });
};

//请求添加购物车或者修改购物车
///api/cart/addToCart/{ skuId }/{ skuNum }
const reqAddOrUpdateCart = (skuId, skuNum) => {
  return Ajax({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: "POST",
  });
};
//获取购物车列表
///api/cart/cartList
const reqShopCartList = () => {
  return Ajax({
    url: "/cart/cartList",
    method: "GET",
  });
};
export {
  reqCategoryList,
  reqBannerList,
  reqFloorList,
  reqGoodsListInfo,
  reqGoodsDetailInfo,
  reqAddOrUpdateCart,
  reqShopCartList,
};
