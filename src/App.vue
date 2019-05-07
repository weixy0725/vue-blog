<template>
  <div id="app">
      <vue-particles color="#328989" :particleOpacity="0.7" :particlesNumber="90" shapeType="circle" :particleSize="4"
      linesColor="#328989" :linesWidth="1" :lineLinked="true" :lineOpacity="0.3" :linesDistance="150" :moveSpeed="3"
      :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" style="position: fixed; width: 100%;height:100%;z-index=-1">
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
        <el-col :span="4">
          <side-bar></side-bar>
        </el-col>
        <el-col :span="15">
          <el-main class="main-size">
            <router-view v-if="isRouterAlive"/>
          </el-main>
        </el-col>
        <el-col :span="5" style="margin-top:1%;">
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
import { functionDeclaration } from '@babel/types';

  export default {
    name: 'App',
    components: {
      "headerNav": header,
      "sideBar": sideBar,
      "rightBar": rightBar
    },
    data(){
      return {
        isRouterAlive:true
      }
    },
    provide(){
      return{
        reload:this.reload
      }
    },
    computed:{
    },
    methods:{
         reload(){
             this.isRouterAlive=false;
             this.$nextTick(function(){
                this.isRouterAlive=true
             })
         }
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
    /* position: relative; */
    min-width: 900px;
  }

  .header-fixed {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 100;
    background-color:#77ac98;
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