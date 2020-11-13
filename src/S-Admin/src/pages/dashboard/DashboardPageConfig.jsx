import DashboardPage from "./DashboardPage";

export const DashboardPageConfig = {
  routes: [
    {
      path: "/admin/charts",
      exact: true,
      component: DashboardPage
    }
  ]
};
