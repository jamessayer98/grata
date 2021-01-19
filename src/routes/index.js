import React from "react";

const Dashboard = React.lazy(() => import("../views/dashboard/Dashboard"));
const Users = React.lazy(() => import("../views/users/Users"));
const AddUser = React.lazy(() => import("../views/users/AddUser"));

const Properties = React.lazy(() => import("../views/properties/Properties"));
const Customer = React.lazy(() => import("../views/properties/Customer"));
const AddCustomer = React.lazy(() => import("../views/properties/AddCustomer"));
const EditCustomer = React.lazy(() =>
  import("../views/properties/EditCustomer")
);

const Services = React.lazy(() => import("../views/services/Services"));
const Reports = React.lazy(() => import("../views/reports/Reports"));

const routes = [
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/users", name: "Users", component: Users, exact: true },
  { path: "/users/adduser", name: "AddUser", component: AddUser, exact: true },
  {
    path: "/properties",
    name: "Properties",
    component: Properties,
    exact: true,
  },
  {
    path: "/properties/customer",
    name: "Customer",
    component: Customer,
    exact: true,
  },
  {
    path: "/properties/customer/add",
    name: "AddCustomer",
    component: AddCustomer,
  },
  {
    path: "/properties/customer/edit",
    name: "EditCustomer",
    component: EditCustomer,
  },

  { path: "/services", name: "Services", component: Services },
  { path: "/reports", name: "Reports", component: Reports },
];

export default routes;
