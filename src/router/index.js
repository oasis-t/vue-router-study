import { createRouter, createWebHashHistory } from 'vue-router'
import childTest from "@/views/childTest";
/*import Home from '../views/Home.vue'
import About from '../views/About.vue'
import User from "@/views/User";*/

//懒加载方法一：
const Home = ()=> import('../views/Home');
const About = ()=> import('../views/About');
// const User = ()=> import('../views/User');

//定义路由,配置映射关系
const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,

  },
  {
    path:'/user',
    name:'User',
    component: () => import('../views/User'),
    children:[
      {
        path:'child',
        component:()=> import('../views/childTest')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //懒加载方法二：
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
//创建实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // mode:'history'
})

//导出router实例
export default router
