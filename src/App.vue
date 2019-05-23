<template>
  <div id="app">
    <vue-particles
      color="#97E0C2"
      :particleOpacity="0.7"
      :particlesNumber="90"
      shapeType="circle"
      :particleSize="4"
      linesColor="#328989"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.3"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      style="position: fixed; width: 100%;height:100%;z-index=-1"
    ></vue-particles>
    <!-- <el-container style="width:100%"> -->
    <el-row style="height:50px">
      <el-header class="header-fixed">
        <!-- 导航栏 -->
        <header-nav></header-nav>
      </el-header>
    </el-row>
    <el-row class="page-size">
      <!-- <el-container class="page-size"> -->
      <el-col :span="4">
        <side-bar v-if="isSideBarShow"></side-bar>
        <content-side-bar v-if="!isSideBarShow"></content-side-bar>
      </el-col>
      <el-col :span="15">
        <el-main class="main-size">
          <router-view v-if="isRouterAlive"/>
        </el-main>
      </el-col>
      <el-col :span="5" style="margin-top:1%;">
        <right-bar></right-bar>
      </el-col>
      <!-- </el-container>        -->
    </el-row>
    <!-- </el-container> -->
  </div>
</template>

<script>
import header from "./components/common/Header.vue";
import sideBar from "./components/common/SideBar.vue";
import rightBar from "./components/common/RightBar.vue";
import contentSideBar from "./components/common/ContentSideBar.vue"
// import { functionDeclaration } from '@babel/types';

export default {
  name: "App",
  components: {
    headerNav: header,
    sideBar: sideBar,
    rightBar: rightBar,
    contentSideBar:contentSideBar
  },
  data() {
    return {
      isRouterAlive: true,
      isSideBarShow: true
    };
  },
  provide() {
    return {
      reload: this.reload,
      controlSideBar:this.controlSideBar
    };
  },
  created() {
    if (sessionStorage.getItem("store")) {
      //页面加载前读取sessionStorage里的状态信息
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }

    window.addEventListener("beforeunload", () => {
      //在页面刷新前将vuex里的信息保存到sessionStorage里
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  },
  computed: {},
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
    controlSideBar(data){
      this.isSideBarShow=data
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  /* position: relative; */
  min-width: 1300px;
}

.header-fixed {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  background-color: #223e36;
  pointer-events: none;
}

.page-size {
  height: 2500px;
  z-index: 99;
  pointer-events: none;
}

.main-size {
  margin-top: 1%;
  z-index: 99;
  pointer-events: none;
}
</style> 