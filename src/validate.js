//注册 使用
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

//验证信息本地化
import zh_CN from "vee-validate/dist/locale/zh_CN";
VeeValidate.Validator.localize("zh_CN", {
  messages: {
    ...zh_CN.messages,
    //自定义
    is: (field) => `${field}必须与密码相同`,
  },
  attributes: {
    phone: "手机号",
    code: "验证码",
    password: "密码",
    protocol: "协议",
  },
});
