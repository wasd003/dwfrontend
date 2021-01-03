import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/Home";

import NoneAA from "@/components/combination/NoneAA";
import NoneAD from "@/components/combination/NoneAD";
import TextMovie from "@/components/combination/TextMovie";
import NoneMovie from "@/components/combination/NoneMovie";
import WeekdayMovie from "@/components/combination/WeekdayMovie";
import SlidingBlockMovie from "@/components/combination/SlidingBlockMovie";
import SlidingTextMovie from "@/components/combination/SlidingTextMovie";
import NoneMovieCountPie from "@/components/combination/NoneMovieCountPie";
import YearMovie from "@/components/combination/YearMovie";
import MonthDayMovie from "@/components/combination/MonthDayMovie";
import TextCareer from "@/components/combination/TextCareer";
import TextJson from "@/components/combination/TextJson";
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
                },
                {
                    path: '/yearMovie',
                    name: 'yearMovie',
                    component: YearMovie
                },
                {
                    path: '/monthDayMovie',
                    name: 'monthDayMovie',
                    component: MonthDayMovie
                },
                {
                    path: '/textCareer',
                    name: 'textCareer',
                    component: TextCareer
                },
                {
                    path: '/textJson',
                    name: 'textJson',
                    component: TextJson
                }
            ]
        }
    ]
});
