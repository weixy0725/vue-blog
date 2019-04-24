<template>
    <div>
        <el-row class="row-size">
            <div class="item">
                <div class="content">
                    <a class="header" href="https://my.oschina.net/u/2478308/blog/1580589" target="_blank">
                        <div class="ui label">原创</div>
                        xxxxxxx 教程
                    </a>
                    <div class="description">
                        <p class="line-clamp">
                            本例为Spring Boot 简单应用的基础教程，IDE为Eclipse，参考官方reference guide文档。
                            英文文档地址：https://docs.spring.io/spring-boot/docs/current/reference/pdf/
                            github上他人翻译的...
                        </p>
                    </div>
                    <div class="extra">
                        <div class="item"><a href="https://my.oschina.net/u/2478308?tab=newest&amp;catalogId=3387050"
                                class="classification"><i class="el-icon-document">123学习记录</i></a></div>
                        <div class="item">2017/12/26 10:42</div>
                        <div class="item"><i class="el-icon-view"></i> 535</div>
                        <div class="item"><a href="https://my.oschina.net/u/2478308/blog/1594948#comments"
                                target="_blank"><i class="el-icon-edit-outline"></i> 6</a></div>
                    </div>
                </div>
            </div>
        </el-row>
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
        margin-top: 2em;
    }

    .pagination-class {
        margin-top: 30px;
    }

    a.header {
        display: block;
        text-decoration: none;
        cursor: pointer;
        margin-top: 10px;

    }

    .ui.label {
        display: inline-block;
        line-height: 1;
        vertical-align: baseline;
        margin: 0 .14285714em;
        background-image: none;
        padding: .5833em .833em;
        text-transform: none;
        font-weight: 400;
        font-size: 0.8em;
        border: 0 solid transparent;
        border-radius: .14285714rem;
        -webkit-transition: background .1s ease;
        transition: background .1s ease;
        background-color: cadetblue !important;
        border-color: cadetblue !important;
        color: #fff !important;
    }

    .header:not(.ui) {
        font-size: 1.1em;
        color: rgba(0, 0, 0, .85);
        font-weight: 700;
    }

    .description {
        display: block;
        margin-top: 2em;
        max-width: auto;
        font-size: 1em;
        line-height: 1.4285em;
        color: rgba(0, 0, 0, .87);
    }

    .line-clamp {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        margin: 0 0 .5em;
    }

    .extra {
     font-size: .92857143em;
     margin-top: 2em;
    
    }

    .extra .item {
        display: inline-block; 
        font-size: .92857143em;
        color: #606266;
        padding-left:0.5em; 
    }

    .extra .item a{
        text-decoration: none;
        cursor: pointer;
        color: #606266
        
    }

</style>

<style>
    .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: cadetblue;
        color: #FFF;
    }
</style>