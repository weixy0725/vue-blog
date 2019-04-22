<template>
    <div>
    <div class="article-list">
    <el-row class="row-size">
        <ElCol :span="24">
            <div class="item">
                    <a class="header" href="https://my.oschina.net/u/2478308/blog/1580589" target="_blank">
                        <div class="ui teal label horizontal" data-tooltip="原创">原</div>
                        gRPC Java 应用教程
                    </a>

            </div>
        </ElCol>
    </el-row>
   </div>
    <el-row class="pagination-class">
        <el-pagination background layout="prev, pager, next" :total="1000" class="test">
        </el-pagination>
    </el-row>
    </div>
</template>

<style scoped>
    .row-size {
        height: 200px;
        color: #606266;
        border: 1px solid #E4E7ED;
        -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        background: #FFF;
        border-radius: 4px;
        line-height: 30px;
    }

    .pagination-class{
      margin-top: 30px;
    }

    .article-list .header .horizontal.label {
    vertical-align: middle!important;
    margin-top: -2px;
    padding: .4em;
    min-width: 0;
    margin-right: 0;
    }

    .ui.teal.label, .ui.teal.labels .label {
    background-color: #00b5ad!important;
    border-color: #00b5ad!important;
    color: #fff!important;
   } 

   
</style>

<style>
    .el-pagination.is-background .el-pager li:not(.disabled).active{
    background-color: cadetblue;
    color: #FFF;
    }  
</style>