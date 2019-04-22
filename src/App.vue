<template>
  <div id="app">
      <vue-particles color="#328989" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="4"
      linesColor="#dedede" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3"
      :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" style="position: absolute; width: 100%;height:100%;">
     </vue-particles>
    <!-- <el-container style="width:100%"> -->
    <el-row style="height:60px">
      <el-header class="header-fixed">
        <!-- 导航栏 -->
        <header-nav></header-nav>
      </el-header>
    </el-row>
    <el-row class="page-size">
        <!-- <el-container class="page-size"> -->
        <el-col :span="5">
          <side-bar></side-bar>
        </el-col>
        <el-col :span="14">
          <el-main class="main-size">
            <router-view />
          </el-main>
        </el-col>
        <el-col :span="5">
          <right-Bar></right-Bar>
        </el-col>
        <!-- </el-container>        -->

    </el-row>
    <!-- </el-container> --> 
  </div>
</template>

<script>
  import header from './components/common/Header.vue';
  import sideBar from './components/common/SideBar.vue';
  import rightBar from './components/common/RightBar.vue';

  export default {
    name: 'App',
    components: {
      "headerNav": header,
      "sideBar": sideBar,
      "rightBar": rightBar
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    position: relative;
  }

  .header-fixed {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 100;
  }

  .page-size {
    height: 2500px;
    z-index: 99;
  }

  .main-size {
    margin-top: 5%;
    z-index: 99;
  }
</style>