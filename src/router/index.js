import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/organisms/content/HelloWorld'
import MainContent from "@/components/organisms/content/MainContent";
import Login from "../components/organisms/sign/Login";
import SignUp from "../components/organisms/sign/SignUp";
import SignUpdate from "../components/organisms/sign/SignUpdate";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainContent',
      component: MainContent
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/signupdate',
      name: 'signupdate',
      component: SignUpdate
    }
  ]
})
