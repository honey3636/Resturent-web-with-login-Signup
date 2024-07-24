import { createWebHashHistory,createRouter } from "vue-router";
import SignUp from "./components/SignUp.vue";
import HomeCom from "./components/Home.vue";
import LoginCom from "./components/Login.vue";
import AddRest from "./components/AddRest.vue";
import UpdateRest from "./components/UpdateRest.vue";


const routes=[
    {
        name:"HomeCom",
        path:"/",
        component:HomeCom
    },
    {
        name:"SignUp",
        path:"/signUp",
        component:SignUp 
    },
    {
        name:"LoginCom",
        path:"/login",
        component:LoginCom  
    },
    {
        name:"AddRest",
        path:"/addResturant",
        component:AddRest 
    },
    {
        name:"UpdateRest",
        path:"/updateResturant/:id",
        component:UpdateRest 
    },
];

const router=createRouter({
    history:createWebHashHistory(),routes
});

export default router;
