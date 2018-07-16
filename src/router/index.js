import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import about from '@/components/about'
// import vi from '@/components/vi'
// import cases from '@/components/cases'
import aboutwlmy from '@/components/aboutwlmy'
import aboutodb from '@/components/aboutodb'
import aboutxyjs from '@/components/aboutxyjs'
import details from '@/components/details'
import aboutmdn from '@/components/aboutmdn'
import aboutpanc from '@/components/aboutpanc'
import aboutasbd from '@/components/aboutasbd'
import callmidea from '@/components/callmidea'
import cs from '@/components/cs'
import aboutdetails from '@/components/aboutdetails'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: index},
    {path: '/about', name: 'about', component: about},
    {path: '/details', name: 'details', component: details,
    children: [ //这里就是二级路由的配置
    {
     path: '/aboutxyjs',
     name: 'aboutxyjs',
     component: aboutxyjs
    },
    {
     path: '/aboutwlmy',
     name: 'aboutwlmy',
     component: aboutwlmy
    },
    {
     path: '/aboutodb',
     name: 'aboutodb',
     component: aboutodb
    },
    {
     path: '/aboutmdn',
     name: 'aboutmdn',
     component: aboutmdn
    },
    {
     path: '/aboutpanc',
     name: 'aboutpanc',
     component: aboutpanc
    },
    {
     path: '/aboutasbd',
     name: 'aboutasbd',
     component: aboutasbd
    }
   ]},
    // {path: '/vi', name: 'vi', component: vi},
    // {path: '/cases', name: 'cases', component: cases},
    {path: '/cs', name: 'cs', component: cs},
    {path: '/callmidea', name: 'callmidea', component: callmidea},
    {path: '/aboutdetails', name: 'aboutdetails', component: aboutdetails},
  ]
})
