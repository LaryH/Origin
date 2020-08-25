<template>
  <div>group</div>
</template>

<script>
export default {
  name: "MyOrder",
};
</script>

<style lang="less" scoped>
.like {
  border: 1px solid #ddd;
  margin: 15px 20px;

  .kt {
    border-bottom: 1px solid #ddd;
    background: #f1f1f1;
    color: #666;
    margin: 0;
    padding: 12px;
    font-size: 15px;
  }

  .like-list {
    padding: 15px 11px;
    overflow: hidden;

    .likeItem {
      width: 25%;
      float: left;

      .p-img {
        text-align: left;

        img {
          width: 167px;
          height: 123px;
        }
      }

      .attr {
        padding: 0 15px;
      }

      .price {
        padding: 0 15px;
        font-size: 16px;
        color: #c81623;
        margin-bottom: 20px;
      }

      .commit {
        padding: 0 15px;
      }
    }
  }
}
</style>
