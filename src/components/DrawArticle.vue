<template>
 <div class="p-a">
  <div class="content-class">
    <div class="article-header">
      <div v-if="isOriginal==3" class="ui label copy">临摹</div>
      <div v-if="isOriginal==2" class="ui label practice">练习</div>
      <div v-if="isOriginal==1" class="ui label own">原创</div>
      <div v-if="isOriginal==0" class="ui label other">转载</div>
      {{articleName}}
      <el-divider></el-divider>
    </div>
    <div class="content-style">
    <div v-html="articleContent"></div>
    </div>
  </div>
   <div class="mes-class">
      <div>
        <el-button
          type="info"
          style="font-size:18px;margin-top:18px;width:50%"
          plain
          @click="dialogVisible = true"
        >留 言</el-button>
        <ul style="list-style-type: none;">
          <li v-for="i in list" v-bind:key="i.id">
            <div v-if="i.type==0" class="response-class">
              <label class="ui label blog-owner">文章作者</label>
              <span style="padding-left:2em;font-size: 0.5em;">{{i.datetime}}</span>
              <div class="response-content">
                <label class="response-person">@{{i.ip}}</label>
                {{i.message}}
              </div>
            </div>
            <div v-else class="message-class">
              <label class="ui label per">{{i.ip}}</label>
              <span style="padding-left:2em;font-size: 0.5em;">{{i.datetime}}</span>
              <div class="message-content">{{i.message}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <el-dialog title="留 言" :visible.sync="dialogVisible" width="50%" :modal-append-to-body="false">
      <el-input
        type="textarea"
        :autosize="{ minRows: 8, maxRows: 16}"
        placeholder="请输入内容"
        v-model="textarea"
      ></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="info" @click="saveMessage()">留 言</el-button>
      </span>
    </el-dialog>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      articleURL: this.host + "/articleManagement/article",
      saveMessageURL: this.host + "/messageManagement/message",
      getMessageURL: this.host + "/messageManagement/message",
      articleName: "",
      articleContent: "",
      isOriginal: 2,
      dialogVisible: false,
      textarea: "",
      articleId: "",
      list: []
    };
  },
  inject: ["controlSideBar"],
  computed: {},
  methods: {
       ...mapMutations(['setGoBackUrl']),
    getArticle() {
      let _this = this;
      var parameters = {};
      this.articleId=this.$route.query.articleId;
      parameters["articleId"] = this.articleId;
      this.$axios
        .get(this.articleURL, {
          params: parameters
        })
        .then(res => {
          if (res.data.result.code == 0) {
            this.articleName = res.data.object.articleName;
            this.articleContent = res.data.object.articleContent;
            this.isOriginal = res.data.object.isOriginal;
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
    },
    saveMessage() {
      var formData = new FormData();
      if (this.textarea == "") {
        this.$message.error("留言内容不可为空！");
      } else {
        formData.append("message", this.textarea);
        formData.append("type", 1); //留言的type为1
        formData.append("articleId", this.articleId);
        this.$axios.post(this.saveMessageURL, formData).then(res => {
          if (res.data.result.code == 0) {
            this.dialogVisible = false;
            this.$message.info("留言成功");
            this.textarea="";
            this.getMessage();
          } else if (res.data.result.code == 1) {
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
    getMessage() {
      let _this = this;
      var parameters = {};
      parameters["articleId"] = this.articleId;
      this.$axios
        .get(this.getMessageURL, {
          params: parameters
        })
        .then(res => {
          if (res.data.result.code == 0) {
            this.list = res.data.array;
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
    this.setGoBackUrl("/drawAndDesign");
    this.getMessage();
  }
};
</script>

<style scoped>
.p-a {
  pointer-events: auto;
}
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

.ui.label.practice {
  background-color: #6babdf !important;
  border-color: #6babdf !important;
}

.ui.label.copy {
  background-color: #dad1cb !important;
  border-color: #dad1cb !important;
}

.article-header:not(.ui) {
  font-size: 1.3em;
  color: rgba(46, 45, 45, 0.85);
  font-weight: 550;
}

.mes-class {
  min-height: 80px;
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

/* .divider-class{
  padding-left: 10%;
  margin-right: 10%;
} */

.response-class {
  text-align: left;
  width:80%;
  margin-left: 10%;
  margin-right: 10%;
  padding-top: 1%;
  border-top:1px solid #d3d0cba9;
  display:block;
  word-break: break-all;
  word-wrap: break-word;
}

.message-class {
  text-align: left;
  width:80%;
  margin-left: 10%;
  margin-left: 10%;
  padding-top: 1%;
  border-top:1px solid #d3d0cba9;
  display:block;
  word-break: break-all;
  word-wrap: break-word;
}

.message-content {
  text-indent: 2em;
  line-height: 30px;
}

.response-content {
  text-indent: 2em;
  line-height: 30px;
}

.blog-owner {
  font-size: 0.5em;
  background-color: #138bc2e0 !important;
  border-color: #138bc2e0 !important;
}

.per {
  font-size: 0.5em;
  background-color: #ce790aa9 !important;
  border-color:  #ce790aa9 !important;
}

.response-person {
  color: #ce790a !important;
}
</style>
 