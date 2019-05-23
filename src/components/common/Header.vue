<template>
  <el-menu
    :default-active="routerPath==''?this.$route.path:routerPath"
    class="el-menu-demo ceshi"
    mode="horizontal"
    @select="handleSelect"
    router="router"
  >
    <el-menu-item index="/" class="first-item">技术内容</el-menu-item>
    <el-menu-item index="/drawAndDesign">插画与设计</el-menu-item>
    <!-- <el-menu-item index="/literature">文学阅读</el-menu-item>
    <el-menu-item index="/travel">旅游杂记</el-menu-item>-->
  </el-menu>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  data() {
    return {
      //activeIndex: routerPath==''?this.$route.path:routerPath,
      router: true
    };
  },
  computed: {
    ...mapGetters(["routerPath"])
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      sessionStorage.setItem("classificationId", 0);
    }
  }
};
</script>

<style scoped>
/* .el-menu-item{
  margin-left: 5%;
  width: 10%;
  color:#ffffff;
}

.first-item{
  margin-left: 22.5%;
  width: 10%;
} */

.ceshi {
  background-color: #223e36;
  pointer-events: auto;
}

.el-menu-item {
  margin-left: 15%;
  width: 10%;
  color: #ffffff;
}

.el-menu-item:not(.is-disabled):hover,
.el-menu-item:not(.is-disabled):focus {
  background-color: #223e36;
  color: #b9dec9;
}

.el-menu-item.is-active {
  background-color: #223e36;
  border-bottom: 2.5px solid #b9dec9;
  color: #b9dec9;
}

.first-item {
  margin-left: 32.5%;
  width: 10%;
}
</style>