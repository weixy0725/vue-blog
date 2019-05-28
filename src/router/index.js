import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index'
import drawAndDesign from '@/components/DrawAndDesign'
import literature from '@/components/Literature'
import travel from '@/components/Travel'
import article from '@/components/Article'
import drawArticle from '@/components/DrawArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '技术内容',
      component: index
    },{
      path:'/drawAndDesign',
      name: '插画与设计',
      component:drawAndDesign

    },{
      path:'/literature',
      name: '文学阅读',
      component:literature
    },{
      path:'/travel',
      name: '旅行杂记',
      component:travel
    },{
      path:'/article',
      name:'文章内容',
      component:article
    },{
      path:'/drawArticle',
      name:'插画与设计文章内容',
      component:drawArticle
    }
  ]
})
