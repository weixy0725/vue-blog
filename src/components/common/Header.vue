<template>
    
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router="router">
        <el-menu-item index="/" class="first-item">模块1</el-menu-item>
        <el-menu-item index="/drawAndDesign">模块2</el-menu-item>
        <!-- <el-menu-item index="/literature">模块3</el-menu-item>
        <el-menu-item index="/travel">模块4</el-menu-item> -->
    </el-menu>
</template>

<script>
    export default {
      data() {
        return {
          activeIndex:this.$route.path,
          router:true
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
  </script>

<style scoped>

/* .el-menu-item{
  margin-left: 5%;
  width: 10%;
}

.first-item{
  margin-left: 22.5%;
  width: 10%;
} */

.el-menu-item{
  margin-left: 15%;
  width: 10%;
}

.first-item{
  margin-left: 35%;
  width: 10%;
}

</style>