import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/Home";

import NoneAA from "@/components/combination/NoneAA";
import NoneAD from "@/components/combination/NoneAD";
import SelectionMovie from "@/components/combination/SelectionMovie";
import TextMovie from "@/components/combination/TextMovie";
import NoneMovie from "@/components/combination/NoneMovie";
import WeekdayMovie from "@/components/combination/WeekdayMovie";
import SlidingBlockMovie from "@/components/combination/SlidingBlockMovie";
import SlidingTextMovie from "@/components/combination/SlidingTextMovie";
import NoneMovieCountPie from "@/components/combination/NoneMovieCountPie";
Vue.use(Router);//加载Router插件


export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,

            children: [
                {
                    path: '/noneAA',
                    name: 'noneAA',
                    component: NoneAA,
                },
                {
                    path: '/noneAD',
                    name: 'noneAD',
                    component: NoneAD
                },
                {
                    path: '/selectionMovie',
                    name: 'selectionMovie',
                    component: SelectionMovie
                },
                {
                    path: '/textMovie',
                    name: 'textMovie',
                    component: TextMovie
                },
                {
                    path: '/noneMovie',
                    name: 'noneMovie',
                    component: NoneMovie
                },
                {
                    path: '/weekdayMovie',
                    name: 'weekdayMovie',
                    component: WeekdayMovie
                },
                {
                    path: '/slidingBlockMovie',
                    name: 'slidingBlockMovie',
                    component: SlidingBlockMovie
                },
                {
                    path: '/slidingTextMovie',
                    name: 'slidingTextMovie',
                    component: SlidingTextMovie
                },
                {
                    path: '/noneMovieCountPie',
                    name: 'noneMovieCountPie',
                    component: NoneMovieCountPie
                }
            ]
        }
    ]
});
