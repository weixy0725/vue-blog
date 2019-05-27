<template>
  <div class="info-all">
    <img src="../../assets/girl.png" class="head-img">
    <span class="name">Ayuan</span>
    <div v-if="type==1">
      <div class="all-icon-class">
        <a href="https://github.com/weixy0725" target="_blank">
          <img src="../../assets/github.png" class="icon-class">
        </a>
        <span>&nbsp;&nbsp;</span>
        <a href="https://my.oschina.net/u/2478308" target="_blank">
          <img src="../../assets/oschina.png" class="icon-class">
        </a>
      </div>
      <div class="introduce">
          <label style="text-align:center">个人介绍</label>
          <p style="text-indent:2em;text-align:left">主要从事Java后端开发工作,同时对前端开发感兴趣,希望可以成为一个优秀的全栈工程师ヾ(✿ﾟ▽ﾟ)ノ</p>
          <label style="text-align:center">联系方式</label>
          <p style="text-align:center">weixy0725@aliyun.com</p>
      </div>
    </div>
    <div v-if="type==2">
      <div class="all-icon-class">
        <a href="https://www.gracg.com/beishu" target="_blank">
          <img src="../../assets/tuyawangguo.png" class="icon-class">
        </a>
        <span>&nbsp;&nbsp;</span>
        <a href="https://www.zcool.com.cn/u/19208618" target="_blank">
          <img src="../../assets/zzcool.png" class="icon-class">
        </a>
        <div class="introduce">
          <label style="text-align:center">个人介绍</label>
          <p style="text-indent:2em;text-align:left">插画与设计爱好者，目前是还在入门阶段的小透明ヾ(◍°∇°◍)ﾉﾞ</p>
          <label style="text-align:center">联系方式</label>
          <p style="text-align:center">weixy0725@aliyun.com</p>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      technology: false,
      draw: true
    };
  },
  computed: {
    ...mapGetters(["type"])
  }
};
</script>


<style scoped>
.info-all {
  padding-top: 10%;
  height: 700px;
  min-width: 200px;
  color: #606266;
  /* border: 1px solid #e4e7ed;
  border-width: 0px 0 0 1px; */
  /* -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1); */
  background: rgba(255,255,255,0);
  border-radius: 3px;
  line-height: 30px;
  margin-right: 2%;
  margin-left: 20%;
  margin-top: 2em;
  pointer-events: auto;
}

.head-img {
  border: 6px solid #e4e7ed;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.name {
  display: block;
  padding-top: 1em;
  color: #223e36;
}
.all-icon-class {
  display: inline;
  margin: 0 atuo;
}

.icon-class {
  margin-top: 1.5em;
  width: 20px;
  height: 20px;
}

.introduce{
  margin-top: 8%;
  margin-left: 10%;
  margin-right: 10%;
  color: #223e36;
}
/*
    .icon-class:not(is-first){
         padding-left: 0.7em;
    } */
</style>