<template>
  <div>
    <ul style="list-style-type: none;">
      <li v-for="i in list" v-bind:key="i.articleId">
        <el-row class="row-size">
          <div class="item">
            <div class="content">
              <router-link
                :to="{path:'/article', query: { articleId: i.articleId }}"
                class="header"
                target="_self"
              >
                <div v-if="i.isOriginal==1" class="ui label own">原创</div>
                <div v-if="i.isOriginal==0" class="ui label other">转载</div>
                <div v-if="i.isOriginal==4" class="ui label learn">学习</div>
                {{i.articleName}}
              </router-link>
              <div class="divider-class">
              <el-divider></el-divider>
              </div>
              <div class="description">
                <router-link
                  :to="{path:'/article', query: { articleId: i.articleId }}"
                  style="text-decoration: none;"
                >
                  <p class="line-clamp">{{i.articleSummarize}}</p>
                </router-link>
              </div>
              <div class="extra">
                <div class="item">
                   <svg-icon name="leaf2" size="18"></svg-icon>
                   &nbsp;{{i.classification}}
                  <!-- <i class="el-icon-star-on"></i>&nbsp;{{i.classification}} -->
                </div>
                <div class="item">{{i.datetime}}</div>
                <div class="item">
                  <i class="el-icon-view"></i>&nbsp;{{i.browseTimes}}
                </div>
                <div class="item">
                  <i class="el-icon-chat-line-square"></i>&nbsp;{{i.messageCount}}
                </div>
              </div>
            </div>
          </div>
        </el-row>
      </li>
    </ul>
    <el-row class="pagination-class">
      <el-pagination
        background
        layout="total,prev,pager,next,jumper"
        :total="total"
        :current-page="pageNumber"
        :page-sizes="[10, 20, 30]"
        :page-size="pageSize"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </el-row>
  </div>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex'
import svgIcon from "./common/SvgIcon.vue"

export default {
  name: "index",
  components: {
    svgIcon:svgIcon
  },
  data() {
    return {
      articlesURL: this.host + "/articleManagement/articles",
      classificationsURL:this.host+"/articleManagement/classification",
      list: [],
      typeId:1,
      classificationId:sessionStorage.getItem("classificationId")==null?this.classification:sessionStorage.getItem("classificationId"),
      total: 0,
      pageNumber: 1,
      pageSize: 10
    };
  },
  inject: ["controlSideBar"],
  computed:{
    ...mapGetters(['classification'])
  },
  methods: {
     ...mapMutations(['changeSideBar','changeType','setRouterPath']),

    handleSizeChange(val) {
      this.pageSize = val;
      this.search();
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.pageNumber = val;
      this.search();
      console.log(`当前页: ${val}`);
    },
    search() {
      var parameters={};
      parameters["typeId"]=this.typeId;
      if(this.classificationId>0){
            parameters["classificationId"]=this.classificationId;
      }
      parameters["pageIndex"]=this.pageNumber;
      parameters["pageSize"]=this.pageSize;
      this.$axios.get(this.articlesURL, {
        params:parameters
      }).then(res => {
        if (res.data.result.code == 0) {
          this.list = res.data.array;
          this.total = res.data.object.count;
        } else if (res.data.result.code == 1) {
          this.$message({
            type: "warning",
            message: res.data.result.info
          });
        }else if(res.data.result.code == -1){
         this.$message({
            type: "warning",
            message: res.data.result.developInfo
          });

        }
      });
    },
    getclassifications(){
      let _this =this;
      var parameters={};
      parameters["typeId"]=this.typeId;
      this.$axios.get(this.classificationsURL, {
        params:parameters
      }).then(res => {
        if (res.data.result.code == 0) {
          _this.changeSideBar(res.data.array);
        } else if (res.data.result.code == 1) {
          this.$message({
            type: "warning",
            message: res.data.result.info
          });
        }else if(res.data.result.code == -1){
         this.$message({
            type: "warning",
            message: res.data.result.developInfo
          });
        }
      });
    }
  },
  mounted() {
    this.search();
    this.getclassifications();
    this.changeType(this.typeId);
    this.setRouterPath("/");
    this.controlSideBar(true);
  }
  // ,
  //  watch: {
  //    '$route' (to, from) { //监听路由是否变化
  //    if(this.$route.params.classificationId!=null){// 判断条件1  判断传递值的变化
  //      this.classificationId=this.$route.params.classificationId;
  //     this.search();
  //    }
  //  }
  // }
};
</script>

<style scoped>
.row-size {
  height: 200px;
  color: #606266;
  border: 1px solid #07806252;
  /* border: 1px solid #0780622a; */
  /* border-width: 1px 0; */
  -webkit-box-shadow: 0 5px 10px 0 rgba(14, 161, 117, 0.1);
  box-shadow: 0 5px 10px 0 rgba(14, 161, 117, 0.048);
  /* background: rgba(189, 231, 222, 0.075);  */
  /* background: #54948215;  */
  background:rgba(255, 255, 255, 0);
  border-radius: 5px;
  line-height: 30px;
  pointer-events: auto;
  margin-top: 1.5em;
}


.pagination-class {
  margin-top: 30px;
  pointer-events: auto;
}

a.header {
  display: block;
  text-decoration: none;
  cursor: pointer;
  margin-top: 15px;
}

.ui.label {
  display: inline-block;
  line-height: 1;
  vertical-align: baseline;
  margin: 0 0.14285714em;
  background-image: none;
  padding: 0.5833em 0.833em;
  text-transform: none;
  font-weight: 400;
  font-size: 0.8em;
  border: 0 solid transparent;
  border-radius: 0.14285714rem;
  -webkit-transition: background 0.1s ease;
  transition: background 0.1s ease;
  /* background-color: #77ac98 !important;
        border-color: #77ac98 !important; */
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

.header:not(.ui) {
  font-size: 1.1em;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 700;
}

.description {
  display: block;
  margin-top: 1em;
  margin-left: 1em;
  margin-right: 1em;
  max-width: auto;
  font-size: 1em;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
}

.line-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin: 0 0 0.5em;
  color: #000;
}

.extra {
  font-size: 0.92857143em;
  margin-top: 2em;
}

.extra .item {
  display: inline-block;
  font-size: 0.92857143em;
  color: #606266;
  padding-left: 0.6em;
}

.extra .item svg{
  vertical-align: middle;
}

/* .extra .item a{
        text-decoration: none;
        cursor: pointer;
        color: #606266
        
    } */

.extra .item i {
  color: #6d8346;
  font-size: 1.2em;
}
.divider-class{
  padding-left: 10%;
  margin-right: 10%;
}
</style>

<style>
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #77ac98;
  color: #fff;
}

/* .el-divider {
    background-color: #0aa17b2d;
    position: relative;
} */
</style>