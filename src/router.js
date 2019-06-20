import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App';
import Read from '@/components/Index/Read';
import Snippet from '@/components/Index/Snippet';
import Say from '@/components/Index/Say';
import SolutionList from '@/components/Index/SolutionList';
import SolutionDetail from '@/components/Index/SolutionDetail';
import Archive from '@/components/Index/Archive';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'App',
            component: App
        },
        {
            path: '/read/:id',
            name: 'Read',
            component: Read
        },
        {
            path: '/snippet',
            name: 'Snippet',
            component: Snippet
        },
        {
            path: '/say',
            name: 'Say',
            component: Say
        },
        {
            path: '/solution',
            name: 'SolutionList',
            component: SolutionList
        },
        {
            path: '/solutionDetail/:id',
            name: 'SolutionDetail',
            component: SolutionDetail
        },
        {
            path: '/archive/',
            name: 'Archive',
            component: Archive
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})
