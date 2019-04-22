import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index'
import draw from '@/components/DrawAndDesign'
import literature from '@/components/Literature'
import travel from '@/components/Travel'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '技术内容',
      component: index
    },{
      path:'/drawAndDesign',
      name: '插画与设计',
      component:draw

    },{
      path:'/literature',
      name: '文学阅读',
      component:literature
    },{
      path:'/travel',
      name: '旅行杂记',
      component:travel
    }
  ]
})
