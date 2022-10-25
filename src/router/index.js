import VueRouter from "vue-router"
import Welcome from "../components/Welcome"
import Main from "../components/Main"
import Home from "../components/Home"
import Work from "../components/Work"
import FunStory from "../components/FunStory"
import Live from "../components/Live"

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:Welcome,
        },
        {
            path:'/main',
            component:Main,
            children:[
                {
                    path:'home',
                    component:Home,
                },
                {
                    path:'work',
                    component:Work,
                },
                {
                    path:'funStory',
                    component:FunStory,
                },
                {
                    path:'live',
                    component:Live,
                },
               
            ]
        }
    ]
})