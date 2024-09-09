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
import WrapperSuggestJob from "../components/Wrapper/WrapperSuggestJob";
import Hero from "../Home/Hero/Hero";
import Home from "../Home/Home";

const useRouteCustom = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <UserTemplate />,
      children: [
        {
          path: path.listjob,
          element: <ListJobPage />,
        },
        {
          index: true,
          element: <Home />,
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
  ]);
  return routes;
};

export default useRouteCustom;
