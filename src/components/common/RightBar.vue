<template>
  <div class="info-all">
    <img src="../../assets/logo.png" class="head-img">
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
      <div>
          <p>简单生活</p>
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
        <div>
          <p>测试</p>
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
  border: 1px solid #e4e7ed;
  /* -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1); */
  background: #fff;
  border-radius: 3px;
  line-height: 30px;
  margin-right: 2%;
  margin-left: 20%;
  margin-top: 5%;
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
  color: #6d8346;
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

/*
    .icon-class:not(is-first){
         padding-left: 0.7em;
    } */
</style>