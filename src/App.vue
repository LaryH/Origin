<template>
  <!-- 项目的最外层 -->
  <div class="outer">
    <Header></Header>
    <router-view></router-view>
    <Footer v-if="!$route.meta.isHide"></Footer>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  methods: {
    ...mapActions(["category"]),
  },
  mounted() {
    this.category();
  },
};
</script>

<style></style>
