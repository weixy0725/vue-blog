<template>
  <el-row class="test">
    <el-col :span="20">
      <!-- <span style="color:#557e6e">分类</span> -->
      <el-menu default-active class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-menu-item
          :index="bar.classificationId"
          @click="test"
          v-for="bar in barContent"
          v-bind:key="bar.classificationId"
        >
          <span slot="title">{{bar.classification}}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  inject: ["reload"],
  computed: {
    ...mapGetters(["barContent", "type"])
  },
  methods: {
    ...mapMutations(["changeClassification"]),
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    test(key) {
      var classificationId = key.index;
      sessionStorage.setItem("classificationId", classificationId);
      this.reload();
    },
    goBack() {
      this.$router.push("/");
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

.el-menu-vertical-demo {
  margin-top: 2em;
}

.el-menu{
  background-color: rgba(255, 255, 255, 0);
}
</style>

<style>
.el-menu-item {
  color: #223e36;
}
/* .el-menu-item.is-active {
    color:#557e6e
} */
</style>
