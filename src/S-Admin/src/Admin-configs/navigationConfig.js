// import { MaterialUIComponentsNavigation } from "../pages/documentation/material-ui-components/MaterialUIComponentsNavigation";

const navigationConfig = [
  {
    id: "Main",
    title: "MAIN",
    type: "group",
    children: [
      {
        id: "dashboard",
        title: "Dashboard",
        type: "item",
    //  icon: "apps",
        url: "/admin/page",
        exact: true,
      },
      {
        id: "products",
        title: "Products",
        type: "collapse",
    //  icon: "file_copy",
        badge: {
          title: "1",
          bg: "#525E8A",
          fg: "#FFFFFF",
        },
        children: [
          {
            id: "all products",
            title: "My Products",
            type: "item",
            url: "/admin/products",
            exact: true,
          },
        /*  {
            id: "add post",
            title: "Add Product",
            type: "item",
            url: "/admin/page",
            exact: true,
          },*/
        ],
      }, 
      { 
       id: "order", 
       title: "Orders", 
       type: "item", 
       url: "/admin/orders", 
       exact: true,
      }, 
      {
       id: "videos", 
       title: "Video Ads", 
       type: "item", 
       url: "/admin/vids", 
       exact: true,
      }, 
      {
        id: "charts", 
        title: "Chart Analysis", 
        type: "item", 
        url: "/admin/charts", 
        exact: true,
       },
      {
        id: "account",
        title: "My Account",
        type: "collapse",
       // icon: "lock",
        children: [
          {
            id: "profile",
            title: "Profile",
            type: "item",
            url: "/admin/profile",
            exact: true,
          },
          {
            id: "Register",
            title: "Edit Profile",
            type: "item",
            url: "/admin/edit",
            exact: true,
          },
        ],
      },

    ],
  },
  {
    id: "Pages",
    title: "Pages",
    type: "group",
    children: [
      {
        id: "About",
        title: "About",
        type: "item",
     //   icon: "description",
        url: "/admin/about",
        exact: true,
      },
    ],
  },
  {
    id: "divider-1",
    type: "divider",
  },
  
  // {
  //   id: "dashboard",
  //   title: "Dashboard",
  //   type: "item",
  //   icon: "dashboard",
  //   url: "/",
  //   exact: true
  // },
  // {
  //   id: "pages",
  //   title: "Pages",
  //   type: "group",
  //   icon: "pages",
  //   children: [
  //     {
  //       id: "all pages",
  //       title: "Pages",
  //       type: "collapse",
  //       icon: "stars",
  
  
  
];

export default navigationConfig;
