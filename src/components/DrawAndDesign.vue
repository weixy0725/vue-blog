<template>
    <div>
        <ElRow class="img-row-size" :gutter="20">
            <ElCol :span="8">
                <div class="img-content">
                    <img src="../assets/test.jpg" class="img-size"></img>
                </div>
            </ElCol>
            <ElCol :span="8">
                <div class="img-content">
                    <img src="../assets/test.jpg" class="img-size"></img>
                </div>
            </ElCol>
            <ElCol :span="8">
                <div class="img-content">
                    <img src="../assets/test.jpg" class="img-size"></img>
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
    }
</style>