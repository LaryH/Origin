import Mock from "mockjs";
import banner from "./banner.json";
import floor from "./floor.json";

//这个方法就是用来让我们模拟接口使用的
//第一个参数是模拟的接口路径
//第二个参数是返回的数据
Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });
