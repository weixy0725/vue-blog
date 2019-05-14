<template>
  <el-row class="test">
    <el-col :span="10" :offset="7">
        <el-button type="text" icon="el-icon-caret-left" @click="goBack()" class="goback">返回列表页</el-button>
    </el-col>
  </el-row>
</template>


<script>
export default {
  data() {
    return {
        data:"/"
    };
  },
  computed: {
  },
  methods: {
    goBack(){
      this.$router.push(this.data);
    }
  }
};
</script>

<style scoped>
.test {
  /* width: 200px; */
  margin-left: 10%;
  margin-top: 34%;
  pointer-events: auto;
  text-align: right;
}

.goback{
    font-size:16px;
    color: #557e6e;
    position: fixed;
    top:50%;
    left: 8%;
}

.goback:hover{
   color:#409EFF;
}
</style>

<style>
</style>
