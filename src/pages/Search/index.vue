<template>
  <div>
    <TypeNav />
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li class="with-x" v-show="searchParams.categoryName">
              {{ searchParams.categoryName }}
              <i @click="removeCategoryName">×</i>
            </li>
            <li class="with-x" v-show="searchParams.keyword">
              {{ searchParams.keyword }}
              <i @click="removeKeyword">×</i>
            </li>
            <li class="with-x" v-show="searchParams.trademark">
              {{
                searchParams.trademark
                  ? searchParams.trademark.split(":")[1]
                  : ""
              }}
              <i @click="removeTrademark">×</i>
            </li>
            <li
              class="with-x"
              v-for="(prop, index) in searchParams.props"
              :key="index"
            >
              {{ prop.split(":")[1] }}
              <i @click="removeProp(index)">×</i>
            </li>
          </ul>
        </div>

        <!--selector-->
        <SearchSelector
          @searchForTrademark="searchForTrademark"
          @searchForAttrValue="searchForAttrValue"
        />

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li
                  :class="{ active: searchParams.order.split(':')[0] === '1' }"
                  @click="changeOrder('1')"
                >
                  <a href="#"
                    >综合
                    <i
                      class="iconfont"
                      :class="{
                        icondown: searchParams.order.split(':')[1] === 'desc',
                        iconup: searchParams.order.split(':')[1] === 'asc',
                      }"
                      v-if="searchParams.order.split(':')[0] === '1'"
                    ></i
                  ></a>
                </li>
                <li>
                  <a href="#">销量</a>
                </li>
                <li>
                  <a href="#">新品</a>
                </li>
                <li>
                  <a href="#">评价</a>
                </li>
                <li
                  :class="{ active: searchParams.order.split(':')[0] === '2' }"
                  @click="changeOrder('2')"
                >
                  <a href="#"
                    >价格<i
                      class="iconfont"
                      :class="{
                        icondown: searchParams.order.split(':')[1] === 'desc',
                        iconup: searchParams.order.split(':')[1] === 'asc',
                      }"
                      v-if="searchParams.order.split(':')[0] === '2'"
                    ></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="goods in goodsList" :key="goods.id">
                <div class="list-wrap">
                  <div class="p-img">
                    <router-link :to="`/detail/${goods.id}`"
                      ><img v-lazy="goods.defaultImg"
                    /></router-link>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>{{ goods.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <router-link :to="`/detail/${goods.id}`">{{
                      goods.title
                    }}</router-link>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <Paginations
            :currentPageNum="searchParams.pageNo"
            :total="total"
            :pageSize="searchParams.pageSize"
            :continuousPage="3"
            @changePageNum="changePageNum"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchSelector from "./SearchSelector/SearchSelector";
import { mapGetters, mapState } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      //用户初始参数
      searchParams: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
        categoryName: "",
        keyword: "",
        order: "1:desc",
        pageNo: 1,
        pageSize: 10,
        props: [],
        trademark: "",
      },
    };
  },
  methods: {
    changePageNum(pageNum) {
      this.searchParams.pageNo = pageNum;
      this.getGoodsListInfo();
    },
    getGoodsListInfo() {
      this.$store.dispatch("getGoodsListInfo", this.searchParams);
    },
    handerSearchParams() {
      let { keyword } = this.$route.params;
      let {
        categoryName,
        category1Id,
        category2Id,
        category3Id,
      } = this.$route.query;

      let searchParams = {
        ...this.searchParams,
        keyword,
        categoryName,
        category1Id,
        category2Id,
        category3Id,
      };

      //这个参数，如果传的是空串，就没必要，剁了
      //为了节省传递数据占用的带宽，为了让后端压力减小
      Object.keys(searchParams).forEach((item) => {
        if (searchParams[item] === "") {
          delete searchParams[item];
        }
      });

      //把我们搜索的参数数据变为当前的这个处理后的对象
      this.searchParams = searchParams;
    },
    removeCategoryName() {
      this.searchParams.pageNo = 1;
      this.searchParams.categoryName = "";
      // this.getGoodsListInfo();
      // this.$router.replace({
      //   name: "Search",
      //   params: this.$route.params,
      // });
      this.$router.replace({
        name: "Search",
        params: this.$route.params,
      });
    },
    removeKeyword() {
      this.searchParams.pageNo = 1;
      this.searchParams.keyword = "";
      this.$bus.$emit("clearKeyword");
      // this.getGoodsListInfo();
      this.$router.replace({
        name: "Search",
        query: this.$route.query,
      });
    },
    removeTrademark() {
      this.searchParams.pageNo = 1;
      this.searchParams.trademark = "";
      this.getGoodsListInfo();
    },
    removeProp(index) {
      this.searchParams.pageNo = 1;
      this.searchParams.props.splice(index, 1);
      this.getGoodsListInfo();
    },
    searchForTrademark(trademark) {
      this.searchParams.pageNo = 1;
      this.searchParams.trademark = `${trademark.tmId}:${trademark.tmName}`;
      this.getGoodsListInfo();
    },
    searchForAttrValue(attr, attrValue) {
      //"属性ID:属性值:属性名"
      //要先去判断props当中是否已经存在这个点击的属性值条件，如果有了就不需要再去发请求
      // const isTrue = this.searchParams.props.some((item) => {
      //   item === `${attr.attrId}:${attr.attrValue}:${attr.attrName}`;
      // });
      // if (isTrue) return;

      let num = this.searchParams.props.indexOf(
        `${attr.attrId}:${attrValue}:${attr.attrName}`
      );
      if (num !== -1) return;
      this.searchParams.pageNo = 1;
      this.searchParams.props.push(
        `${attr.attrId}:${attrValue}:${attr.attrName}`
      );
      this.getGoodsListInfo();
    },
    changeOrder(orderFlag) {
      this.searchParams.pageNo = 1;
      let originOrderFlag = this.searchParams.order.split(":")[0];
      let originOrderType = this.searchParams.order.split(":")[1];
      let newOrder = "";

      if (orderFlag === originOrderFlag) {
        //还是原来那个
        newOrder = `${orderFlag}:${
          originOrderType === "desc" ? "asc" : "desc"
        }`;
      } else {
        newOrder = `${orderFlag}:desc`;
      }

      this.searchParams.order = newOrder;
      this.getGoodsListInfo();
    },
  },
  computed: {
    ...mapGetters(["goodsList"]),
    ...mapState({
      total: (state) => state.search.goodsListInfo.total,
    }),
  },
  //mounted一般用来异步请求数据
  //beforeMount 一般用来同步处理数据(参数)
  beforeMount() {
    //把路由当中获取到的相关数据,添加到搜索条件中
    //如果有搜索条件就有了,如果没有就是初始参数
    this.handerSearchParams();
  },
  mounted() {
    this.getGoodsListInfo();
  },
  watch: {
    $route() {
      this.handerSearchParams();
      this.getGoodsListInfo();
    },
  },
  components: {
    SearchSelector,
  },
};
</script>

<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;

                a {
                  color: #666;

                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: -5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }

      .page {
        width: 733px;
        height: 66px;
        overflow: hidden;
        float: right;

        .sui-pagination {
          margin: 18px 0;

          ul {
            margin-left: 0;
            margin-bottom: 0;
            vertical-align: middle;
            width: 490px;
            float: left;

            li {
              line-height: 18px;
              display: inline-block;

              a {
                position: relative;
                float: left;
                line-height: 18px;
                text-decoration: none;
                background-color: #fff;
                border: 1px solid #e0e9ee;
                margin-left: -1px;
                font-size: 14px;
                padding: 9px 18px;
                color: #333;
              }

              &.active {
                a {
                  background-color: #fff;
                  color: #e1251b;
                  border-color: #fff;
                  cursor: default;
                }
              }

              &.prev {
                a {
                  background-color: #fafafa;
                }
              }

              &.disabled {
                a {
                  color: #999;
                  cursor: default;
                }
              }

              &.dotted {
                span {
                  margin-left: -1px;
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  font-size: 14px;
                  border: 0;
                  padding: 9px 18px;
                  color: #333;
                }
              }

              &.next {
                a {
                  background-color: #fafafa;
                }
              }
            }
          }

          div {
            color: #333;
            font-size: 14px;
            float: right;
            width: 241px;
          }
        }
      }
    }
  }
}
</style>
