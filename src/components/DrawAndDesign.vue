<template>
  <div class="draw-page-size">
    <ul style="list-style-type: none;" v-if="list.length>0">
      <li v-for="(i,index) in list" v-bind:key="index">
        <ElRow class="img-row-size" :gutter="20">
          <ElCol :span="8">
            <div class="img-content">
              <router-link
                :to="{path:'/drawArticle', query: { articleId: i.imgOne.articleId }}"
                class="header"
                target="_self"
              >
                <img src="../assets/test.jpg" class="img-size">
              </router-link>
              <div class="extra">
                <div class="item">
                  <a
                    href="https://my.oschina.net/u/2478308?tab=newest&amp;catalogId=3387050"
                    class="classification"
                  >
                    <i class="el-icon-star-off">{{i.imgOne.classification}}</i>
                  </a>
                </div>
                <div class="item">
                  <i class="el-icon-view"></i> {{i.imgOne.browseTimes}}
                </div>
                <div class="item">
                  <a href target="_blank">
                    <i class="el-icon-edit-outline"></i> {{i.imgOne.messageCount}}
                  </a>
                </div>
              </div>
            </div>
          </ElCol>
         <ElCol :span="8" v-if="i.imgTwo!==undefined">
            <div class="img-content">
              <router-link
                :to="{path:'/drawArticle', query: { articleId: i.imgTwo.articleId }}"
                class="header"
                target="_self"
              >
                <img src="../assets/test.jpg" class="img-size">
              </router-link>
              <div class="extra">
                <div class="item">
                  <a
                    href="https://my.oschina.net/u/2478308?tab=newest&amp;catalogId=3387050"
                    class="classification"
                  >
                    <i class="el-icon-star-off">{{i.imgTwo.classification}}</i>
                  </a>
                </div>
                <div class="item">
                  <i class="el-icon-view"></i> {{i.imgTwo.browseTimes}}
                </div>
                <div class="item">
                  <a href target="_blank">
                    <i class="el-icon-edit-outline"></i> {{i.imgTwo.messageCount}}
                  </a>
                </div>
              </div>
            </div>
          </ElCol>
          <ElCol :span="8" v-if="i.imgThree!==undefined">
            <div class="img-content">
              <router-link
                :to="{path:'/drawArticle', query: { articleId: i.imgThree.articleId }}"
                class="header"
                target="_self"
              >
                <img src="../assets/test.jpg" class="img-size">
              </router-link>
              <div class="extra">
                <div class="item">
                  <a
                    href="https://my.oschina.net/u/2478308?tab=newest&amp;catalogId=3387050"
                    class="classification"
                  >
                    <i class="el-icon-star-off">{{i.imgThree.classification}}</i>
                  </a>
                </div>
                <div class="item">
                  <i class="el-icon-view"></i> {{i.imgThree.browseTimes}}
                </div>
                <div class="item">
                  <a href target="_blank">
                    <i class="el-icon-edit-outline"></i> {{i.imgThree.messageCount}}
                  </a>
                </div>
              </div>
            </div>
          </ElCol>
        </ElRow>
      </li>
    </ul>
    <ElRow class="pagination-class">
      <ElCol :span="10" :offset="7">
        <el-pagination
          background
          layout="total,sizes,prev,pager,next,jumper"
          :total="total"
          :current-page="pageNumber"
          :page-sizes="[18, 36, 54]"
          :page-size="pageSize"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      articlesURL: this.host + "/articleManagement/articles",
      classificationsURL: this.host + "/articleManagement/classification",
      classificationId:
        sessionStorage.getItem("classificationId") == null
          ? this.classification
          : sessionStorage.getItem("classificationId"),
      total: 0,
      pageNumber: 1,
      pageSize: 18,
      typeId: 2,
      list: []
        // {
        //   imgOne:{
        //     articleId:1

        //   },
        //   imgTwo:{
        //       articleId:2
        //   },imgThree:{
        //       articleId:3
        //   }
        //   }]
    };
  },
  inject: ["controlSideBar"],
  computed: {
    ...mapGetters(["classification"])
  },
  methods: {
    ...mapMutations(["changeSideBar", "changeType", "setRouterPath"]),

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
      let _this=this;
      var parameters = {};
      parameters["typeId"] = this.typeId;
      if (this.classificationId != 0) {
        parameters["classificationId"] = this.classificationId;
      }
      parameters["pageIndex"] = this.pageNumber;
      parameters["pageSize"] = this.pageSize;
      this.$axios
        .get(this.articlesURL, {
          params: parameters
        })
        .then(res => {
          if (res.data.result.code == 0) {
            var temp = res.data.array;
            var group = {};
            var test=[];
            for (var i = 0; i < temp.length; i++) {
              group["imgOne"] = temp[i];
              if (i + 1 < temp.length) {
                group["imgTwo"] = temp[i + 1];
              }
              if (i + 2 < temp.length) {
                group["imgThree"] = temp[i + 2];
              }
              i = i + 2;
              test.push(group);
              group = {}; 
            }
            _this.total = res.data.object.count;
            _this.list=test;
            console.log(test);
            console.log(_this.list);
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
    },
    getclassifications() {
      let _this = this;
      var parameters = {};
      parameters["typeId"] = this.typeId;
      this.$axios
        .get(this.classificationsURL, {
          params: parameters
        })
        .then(res => {
          if (res.data.result.code == 0) {
            _this.changeSideBar(res.data.array);
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
  created(){
      this.search();
  },
  mounted() {
    
    this.getclassifications();
    this.changeType(this.typeId);
    this.setRouterPath("/drawAndDesign");
    this.controlSideBar(true);
  }
};
</script>


<style scoped>
.draw-page-size {
  min-height: 2000px;
}
.img-row-size {
  height: 320px;
}

.img-content {
  height: 320px;
  color: #606266;
  border: 1px solid #e4e7ed;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  border-radius: 4px;
  line-height: 30px;
  /* padding-right: 20px;
        padding-left: 20px; */
  margin-top: 5%;
}

.img-size {
  position: relative;
  height: 80%;
  width: 94%;
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 3%;
}

.pagination-class {
  position: relative;
  display: block;
  margin-top: 5%;
  pointer-events: auto;
}

.extra {
  font-size: 0.92857143em;
  margin-top: 2px;
}

.extra .item {
  display: inline-block;
  font-size: 0.92857143em;
  color: #606266;
}

.extra :not(:first-child) {
  padding-left: 6%;
}

.extra .item a {
  text-decoration: none;
  cursor: pointer;
  color: #606266;
}
</style>

<style>
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #77ac98;
  color: #fff;
}
</style>