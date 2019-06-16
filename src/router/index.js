import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/organisms/content/HelloWorld'
import MainContent from "@/components/organisms/content/MainContent";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'mainContent',
      component: MainContent
    }
  ]
})
