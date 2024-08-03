import React from "react";
import { UserTemplatee } from "../template/UserTemplate/UserTemplatee";
import { useRoutes } from "react-router-dom";
import PageNotFound from "../components/PageNoutFound/PageNotFound";
const useRouteCustom = () => {
    const routes = useRoutes(
        {
            path: "/",
            element: <UserTemplatee />,
        },
        {
            path: "*",
            element: <PageNotFound />,
        }
    );
    return routes;
};

export default useRouteCustom;
