import Vue from 'vue'
import Router from 'vue-router'
import None from "@/components/input/None";
import Selection from "@/components/input/Selection";
import TextComponent from "@/components/input/TextComponent";
import Home from "@/pages/Home";

Vue.use(Router);//加载Router插件


export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/none',
            children: [
                {
                    path: '/selection',
                    name: 'selection',
                    component: Selection,
                },
                {
                    path: '/text',
                    name: 'text',
                    component: TextComponent
                }
                ,
                {
                    path: '/none',
                    name: 'none',
                    component: None
                }
            ]
        }
    ]
});
