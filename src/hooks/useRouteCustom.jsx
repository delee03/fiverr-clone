import React from "react";
import UserTemplate from "../template/UserTemplate/UserTemplate";
import { useRoutes } from "react-router-dom";
import PageNotFound from "../components/PageNoutFound/PageNotFound";
import LoginPage from "../pages/LoginPage";
import ListJobPage from "../components/ListJobsPage/ListJobPage";
import { path } from "../common/path";
import AdminTemplate from "../template/AdminTemplate/AdminTemplate";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
import ManagerUser from "../components/ManagerUser/ManagerUser";

import SignUpPage from "../pages/SignUpPage";
import ListCongViec from "../components/ListJobsPage/ListCongViec";

import NavMenuLoaiCV from "../components/NavBar/NavMenuLoaiCV";

import Home from "../Home/Home";
import JobDetail from "../components/JobDetail/JobDetail";

const useRouteCustom = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <UserTemplate />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: path.listjob,
                    element: <ListJobPage />,
                },
                {
                    // index: true,
                    path: "/cong-viec",
                    element: <ListCongViec />,
                },
                {
                    path: "/chi-tiet-cong-viec/:id",
                    element: <JobDetail />,
                },
            ],
        },

        {
            path: "/*",
            element: <PageNotFound />,
        },
        {
            path: "/sign-in",
            element: <LoginPage />,
        },
        {
            path: "/sign-up",
            element: <SignUpPage />,
        },
        {
            path: path.admin,
            element: <AdminTemplate />,
            children: [
                {
                    //path: "/manager-user",
                    index: true,
                    element: <ManagerUser />,
                },
            ],
        },
        {
            path: "/admin-login",
            element: <AdminLogin />,
        },
        {
            path: "/nav",
            element: <NavMenuLoaiCV />,
        },
    ]);
    return routes;
};

export default useRouteCustom;
