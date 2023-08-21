import React from "react";

export const routesAdmin = [
  {
    name: "NotFound",
    path: "*",
    component: React.lazy(() => import("../pages/notFound")),
  },
  {
    name: "Home",
    path: "/",
    component: React.lazy(() => import("../pages/home")),
  },
  {
    name: "Login",
    path: "/login",
    component: React.lazy(() => import("../pages/login")),
  },
  {
    name: "404",
    path: "/404",
    component: React.lazy(() => import("../pages/notFound")),
  },
];
