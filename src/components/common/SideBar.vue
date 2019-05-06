<template>
  <el-row class="tac test">
    <el-col :span="24">
      <el-menu default-active class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-menu-item index="1" @click="test">
          <span slot="title">导航一</span>
        </el-menu-item>
        <el-menu-item index="2" @click="test">
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span slot="title">导航三1213</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>


<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    test(key) {
      console.log(key.index);
    }
  }
};
</script>

<style scoped>
.test {
  width: 200px;
  margin-left: 10%;
  margin-top: 30%;
  pointer-events: auto;
  text-align: right;
}
</style>