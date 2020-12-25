import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);//加载Router插件

// export default new Router({
//   routes:[
//     {
//       path:'/',
//       name:'home',
//       component:Home,
//       redirect:'/index',
//       children:[
//         {
//           path:'/index',
//           name:'index',
//           component:Index,
//         },
//         {
//           path:'/product/:id',/*:id即url中的参数*/
//           name:'product',
//           component:Product,
//         },
//         {
//           path:'/detail/:id',
//           name:'detail',
//           component:Detail,
//         }
//       ]
//     },
//     {
//       path:'/cart',
//       name:'cart',
//       component:Cart,
//     },
//     {
//       path:'/login',
//       name:'login',
//       component:LogIn,
//     }
//   ]
// });
