import MyAds from "./Ads";

export const AdsConfig = {
  routes: [
    {
      path: "/admin/ads",
      exact: true,
      component: MyAds
    }
  ]
};
