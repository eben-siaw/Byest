import React from "react";
import { Redirect } from "react-router-dom";

import { DashboardPageConfig } from "../pages/dashboard/DashboardPageConfig";
import { AboutPageConfig } from "../pages/about/AboutPageConfig";
import { AddPostPageConfig } from "../pages/posts/Products/AddProductPageConfig"; 
import {AllOrdersConfig} from "../pages/orders/Orders/OrdersConfig";
import { AllPostsPageConfig } from "../pages/posts/all-products/AllProductsConfig";
import { CalendarPageConfig } from "../pages/calendar/CalendarPageConfig";
import { ForgotPasswordPageConfig } from "../pages/Profile/forgot-password/ForgotPasswordPageConfig";
import { ProfilePageConfig } from "../pages/Profile/Profile/ProfilePageConfig";
import { EditProfilePageConfig } from "../pages/Profile/EditProfile/EditProfilePageConfig";
import { Error404PageConfig } from "../pages/errors/404/Error404PageConfig";
import { Error500PageConfig } from "../pages/errors/500/Error500PageConfig";
// import { DocumentationConfig } from "../pages/documentation/DocumentationConfig";

const routeConfigs = [
  ...DashboardPageConfig.routes,
  ...AllPostsPageConfig.routes,
  ...AddPostPageConfig.routes, 
  ...AllOrdersConfig.routes,
  ...CalendarPageConfig.routes,
  ...ForgotPasswordPageConfig.routes,
  ...ProfilePageConfig.routes,
  ...EditProfilePageConfig.routes,
  ...Error404PageConfig.routes,
  ...Error500PageConfig.routes,
  ...AboutPageConfig.routes
  // ...DocumentationConfig.routes
];

const routes = [
  ...routeConfigs,
  {
    component: () => <Redirect to="/pages/errors/error-404" />
  }
  // {
  //   path: "/test",
  //   exact: true,
  //   component: <Example />
  // }
];

export default routes;
