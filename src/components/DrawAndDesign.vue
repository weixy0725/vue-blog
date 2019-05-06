<template>
    <div>
        <ElRow class="img-row-size" :gutter="20">
            <ElCol :span="8">
                <div class="img-content">
                    <a href=""><img src="../assets/test.jpg" class="img-size"/></a>
                    <div class="extra">
                        <div class="item"><a href="https://my.oschina.net/u/2478308?tab=newest&amp;catalogId=3387050"
                                class="classification"><i class="el-icon-star-off">分类</i></a></div>
                        <div class="item"><i class="el-icon-view"></i> 535</div>
                        <div class="item"><a href="" target="_blank"><i class="el-icon-edit-outline"></i> 6</a></div>
                    </div>
                </div>
            </ElCol>
            <ElCol :span="8">
                <div class="img-content">
                    <img src="../assets/test.jpg" class="img-size"/>
                </div>
            </ElCol>
            <ElCol :span="8">
                <div class="img-content">
                    <img src="../assets/test.jpg" class="img-size"/>
                </div>
            </ElCol>
        </ElRow>
        <el-row class="pagination-class">
            <el-pagination background layout="prev, pager, next" :total="1000" class="test">
            </el-pagination>
        </el-row>
    </div>
</template>

<style scoped>
    .img-row-size {
        height: 320px;
    }

    .img-content {
        height: 320px;
        color: #606266;
        border: 1px solid #E4E7ED;
        -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        background: #FFF;
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
        margin-top: 30px;
        pointer-events: auto;
    }

    .extra {
        font-size: .92857143em;
        margin-top: 2px;
    }

    .extra .item {
        display: inline-block;
        font-size: .92857143em;
        color: #606266;

    }

    .extra :not(:first-child) {
        padding-left: 6%;
    }

    .extra .item a {
        text-decoration: none;
        cursor: pointer;
        color: #606266
    }
</style>

<style>
    .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #77ac98;
        color: #FFF;
    }
</style>