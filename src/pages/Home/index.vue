<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Like></Like>
    <Rank></Rank>
    <Floor v-for="floor in floorList" :key="floor.id" :floor="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import Brand from "./Brand";
import Floor from "./Floor";
import Like from "./Like";
import ListContainer from "./ListContainer";
import Rank from "./Rank";
import Recommend from "./Recommend";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    Brand,
    Floor,
    Like,
    ListContainer,
    Rank,
    Recommend,
  },
  computed: {
    ...mapGetters(["floorList"]),
  },
  mounted() {
    this.$store.dispatch("getFloorList");
  },
};
</script>

<style lang="less" scoped></style>
