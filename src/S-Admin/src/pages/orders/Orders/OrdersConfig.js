import AllOrders from "../CheckOrders/All-orders";

export const AllOrdersConfig = {
  routes: [
    {
      path: "/admin/orders",
      exact: true,
      component: AllOrders
    }
  ]
};