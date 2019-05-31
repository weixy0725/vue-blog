<template>
  <div class="content-class">
    <div class="article-header">
      <div v-if="isOriginal==1" class="ui label own">原创</div>
      <div v-if="isOriginal==0" class="ui label other">转载</div>
      <div v-if="isOriginal==4" class="ui label learn">学习</div>
      {{articleName}}
      <el-divider></el-divider>
    </div>
    <div class="content-style">
    <div v-html="articleContent"></div>
    <div class="content-footer">
      <label>浏览次数：</label>
      <span>{{browseTimes}}</span>
      <label>留言数量：</label>
      <span>{{messageCount}}</span>
      <label>发布日期：</label>
      <span>{{datetime}}</span>
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      articleURL: this.host + "/articleManagement/article",
      articleName: "",
      articleContent: "",
      isOriginal: 2,
      browseTimes:0,
      datetime:'',
      messageCount:0
    };
  },
  inject: ["controlSideBar"],
  computed: {},
  methods: {
    ...mapMutations(['setGoBackUrl']),
    getArticle() {
      let _this = this;
      var parameters = {};
      parameters["articleId"] = this.$route.query.articleId;
      this.$axios
        .get(this.articleURL, {
          params: parameters
        })
        .then(res => {
          if (res.data.result.code == 0) {
            this.articleName = res.data.object.articleName;
            this.articleContent = res.data.object.articleContent;
            this.isOriginal = res.data.object.isOriginal;
            this.browseTimes=res.data.object.browseTimes;
            this.datetime=res.data.object.datetime;
            this.messageCount=res.data.object.messageCount;
          } else if (res.data.result.code == 1) {
            this.$router.push("/");
            this.$message({
              type: "warning",
              message: res.data.result.info
            });
          } else if (res.data.result.code == -1) {
            this.$message({
              type: "warning",
              message: res.data.result.developInfo
            });
          }
        });
    }
  },
  mounted() {
    this.controlSideBar(false);
    this.getArticle();
    this.setGoBackUrl("/");
  }
};
</script>

<style scoped>
.content-class {
  min-height: 100%;
  color: #606266;
  border: 1px solid #e4e7ed;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  border-radius: 3px;
  line-height: 30px;
  margin-top: 2em;
  pointer-events: auto;
}
.article-header {
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 2em;
}

.content-style{
  padding-left: 4%;
  padding-right: 4%;
  text-align: left;
  padding-bottom: 80px;
}
.content-style >>> img{
  width:90%;
}
.ui.label {
  display: inline-block;
  line-height: 1;
  vertical-align: baseline;
  margin: 0 0.14285714em;
  background-image: none;
  padding: 0.55em 1em;
  text-transform: none;
  font-weight: 400;
  font-size: 0.8em;
  border: 0 solid transparent;
  border-radius: 0.14285714rem;
  -webkit-transition: background 0.1s ease;
  transition: background 0.1s ease;
  color: #fff !important;
}

.ui.label.own {
  background-color: #77ac98 !important;
  border-color: #77ac98 !important;
}

.ui.label.other {
  background-color: #deab8a !important;
  border-color: #deab8a !important;
}

.ui.label.learn {
  background-color: #de8a91 !important;
  border-color: #de8a91 !important;
}

.article-header:not(.ui) {
  font-size: 1.3em;
  color: rgba(46, 45, 45, 0.85);
  font-weight: 550;
}

.content-footer{
   text-align: right;
   height: 50px;
   margin-bottom: -80px;
   font-size: 0.5em;
   color: #606266
}
</style>
