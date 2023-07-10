import React, { Suspense } from "react";
import { createBrowserRouter, } from "react-router-dom";
import HeaderCom from './CommonCom/header'
import About from './about.jsx'
import Home from './home.jsx'
import SearchCompo from './SearchCompo.jsx'
import LoginCompo from './theme/LoginCompo'
import ResCompo from './RegistrationCom'



const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <><HeaderCom /><Home /></>,
    },
    {
        path: "/about",
        element: <><HeaderCom /><About /></>,
    },
    {
        path: "/search",
        element: <><HeaderCom /><SearchCompo></SearchCompo></>,
    },
    {
        path: "/login",
        element: <><HeaderCom /><LoginCompo></LoginCompo></>,
    },
    {
        path: "/resgicomo",
        element: <><HeaderCom /><ResCompo></ResCompo></>,
    },


]);
export default MainRouter;
