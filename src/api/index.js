//加工ajax请求函数,使其进行定向请求指定数据

import Ajax from "@/service/ajax";
import MockAjax from "@/service/mockajax";

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
    method: "get",
  });
};

const reqFloorList = () => {
  return MockAjax({
    url: "/floor",
    method: "get",
  });
};

export { reqCategoryList, reqBannerList, reqFloorList };
