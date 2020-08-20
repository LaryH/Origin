<template>
  <div class="pagination">
    <button
      :disabled="currentPageNum === 1"
      @click="$emit('changePageNum', currentPageNum - 1)"
    >
      上一页
    </button>
    <button
      v-if="startEnd.start > 1"
      :class="{ active: currentPageNum === 1 }"
      @click="$emit('changePageNum', 1)"
    >
      1
    </button>
    <button v-if="startEnd.start > 2">···</button>

    <button
      v-for="page in startEnd.end"
      :key="page"
      v-if="page >= startEnd.start"
      :class="{ active: currentPageNum === page }"
      @click="$emit('changePageNum', page)"
    >
      {{ page }}
    </button>

    <button v-if="totalPageNum - startEnd.end > 1">···</button>
    <button
      v-if="totalPageNum - startEnd.end > 0"
      :class="{ active: currentPageNum === totalPageNum }"
      @click="$emit('changePageNum', totalPageNum)"
    >
      {{ totalPageNum }}
    </button>
    <button
      :disabled="totalPageNum === startEnd.end"
      @click="$emit('changePageNum', currentPageNum + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    currentPageNum: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
    },
    pageSize: {
      type: Number,
      default: 5,
    },
    continuousPage: Number,
    changePageNum: Function,
  },
  computed: {
    totalPageNum() {
      return Math.ceil(this.total / this.pageSize);
    },
    startEnd() {
      let start, end, disNum;
      let { currentPageNum, continuousPage, totalPageNum } = this;

      if (continuousPage > totalPageNum) {
        start = 1;
        end = totalPageNum;
      } else {
        start = currentPageNum - Math.floor(continuousPage / 2);
        end = currentPageNum + Math.floor(continuousPage / 2);

        //修正左边出现的小于1的页码
        if (start < 1) {
          disNum = 1 - start;
          start = start - disNum;
          end = end + disNum;
        }

        //修正右边出现的大于总页码的页码
        if (totalPageNum < end) {
          disNum = end - totalPageNum;
          start = start - disNum;
          end = end - disNum;
        }
      }

      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
