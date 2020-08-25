## Day04

### 使用 mock 模拟数据接口

#### 设计 json 数据的结构和值

    `banners.json`
    `floors.json`

#### 编写 mock.js

```js
//引入mock和相关资源文件(上面2个)
mock.mock("url", { 返回的值 });
mock.mock("/mock/banner", { code: 200, data: banner });
```

#### 配置 mockAjax.js

```js
//引入axios
const mockServer = axios.create({
  baseUrl: "/mock",
  timeout: 20000,
});
//解决异步回调
```

## Day06

#### 1. 移除搜索面包屑,搜索栏清空

对昨日搜索功能进行补充

> 在 Vue 配置对象创建全局事件总线

```js
beforeCreated(){
  Vue.prototype.$EventsBus = this
}
```

> 使用全局事件总线,在 Hander 组件定义函数,并再 mounted 中绑定事件

```js
methods:{
  clearKeyword(){
    this.keyword = "";
  }
}
mounted(){
  this.$bus.$on("clearKeyword", this.clearKeyword);
}
```

> 在 Search 组件移除搜索面包屑的函数中触发事件

```js
this.$bus.$emit("clearKeyword");
```

### 商品排序

#### 分析数据的情况

> 有 4 中排序情况

- 综合升序
- 综合降序
- 价格升序
- 价格降序

#### 动态确定排序项和排序方式

> 把需要排序的对象`orderFlag`和方式`orderType`定义到 computed 中,用对应的计算获取.

```js
computed(){
  orderFlag(){
//orderFlag 综合-->1  价格-->2
return this.searchParams.order.split(":")[0];
  },
  orderType(){
//orderType 升序-->asc 降序-->desc
return this.searchParams.order.split(":")[1];
  }
}
```

> 使用类属性的对象写法,把`orderFlag`做为对象的值判断 active 是否显示

```html
<xxx :class="{active:orderFlag === '1'}">xxx</xxx>
<xxx :class="{active:orderFlag === '2'}">xxx</xxx>
```

> 使用类属性的对象写法,把`orderFlag`做为对象的值判断箭头的图标字体是否显示

```html
<xxx class="iconfont" :class="{iconup:orderType === 'asc'}">xxx</xxx>
<xxx class="iconfont" :class="{iconup:orderType === 'desc'}">xxx</xxx>
```

#### 绑定点击事件,点击切换排序

- 根据点击对象传入的参数判断排序的对象`orderFlag`
- 根据`orderType`来记录当前排序方式,点击后切换,如果是第一次设定默认升序排序

```js
changeOrder(orderFlag){
  let originOrderFlag = this.orderFlag;
  let originOrderType = this.orderType;
  let newOrder = "";

  if(orderFlag === originOrderFlag){
    //代表点的还是原来排序的那个，那么我们只需要改变排序类型就完了
    newOrder = `${originOrderFlag}:${originOrderType} === 'asc' ? 'desc': 'asc'`;
  }else{
    //代表点击的不是原来排序的那个，那么我们需要去改变排序的标志，类型默认就行
    newOrder = `${orderFlag}:'asc'`;
  }
  //更新查询数据并重新发送请求
  this.searchParams.order = newOrder;
  this.getGoodsListInfo();
}
```

### 分页组件

####

在课件中获取分页的静态组件

## Day07

### 详情页面

#### 获取详情组件,配置跳转路由

一般情况,小图列表,图片和放大镜大图应该是三个组件

#### 计算定义 imageList,并传给小图列表和放大镜大图

```js
computed:{
  imageList(){

  }
}
```

> 在小图列表组件中 v-for 创建小图元素,并绑定点击切换事件

> 在放大镜大图组件中计算图片地址,防止出现 A.B.C 的情况

> 在小图列表组件触发自定义事件,放大镜大图组件绑定自定义事件,用于同步图片的 index

>

放大镜

1. 移动事件加给谁
2. mask 的位置
3. 大图动,大图移动反方向的两倍
   client 视口 page 页面 offset 元素本身

## Day09

添加 token

## Day10

新增 2 个组件,拆分组件

添加路由
