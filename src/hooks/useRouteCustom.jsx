import React from "react";
import UserTemplate from "../template/UserTemplate/UserTemplate";
import { useRoutes } from "react-router-dom";
import PageNotFound from "../components/PageNoutFound/PageNotFound";
import LoginPage from "../pages/LoginPage";
const useRouteCustom = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <UserTemplate />,
        },
        {
            path: "/*",
            element: <PageNotFound />,
        },
        {
            path: "/sign-in",
            element: <LoginPage />,
        },
    ]);
    return routes;
};

export default useRouteCustom;
