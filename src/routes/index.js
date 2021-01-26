import React from "react";

const Dashboard = React.lazy(() => import("../views/dashboard/Dashboard"));
const Users = React.lazy(() => import("../views/users/Users"));
const AddUser = React.lazy(() => import("../views/users/AddUser"));

const Customer = React.lazy(() => import("../views/properties/Customer/Customer"));
const AddCustomer = React.lazy(() => import("../views/properties/Customer/AddCustomer"));
const EditCustomer = React.lazy(() => import("../views/properties/Customer/EditCustomer"));

const Building = React.lazy(() => import("../views/properties/Building/Building"));
const AddBuilding = React.lazy(() => import("../views/properties/Building/AddBuilding"));
const EditBuilding = React.lazy(() => import("../views/properties/Building/EditBuilding"));

const Unit = React.lazy(() => import("../views/properties/Unit/Unit"));
const AddUnit = React.lazy(() => import("../views/properties/Unit/AddUnit"));
const EditUnit = React.lazy(() => import("../views/properties/Unit/EditUnit"));

const Services = React.lazy(() => import("../views/services/Services"));
const Reports = React.lazy(() => import("../views/reports/Reports"));

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
    exact: true,
  },
  {
    path: "/users/adduser",
    name: "AddUser",
    component: AddUser,
    exact: true,
  },
  {
    path: "/properties/customer",
    name: "Customer",
    component: Customer,
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
  {
    path: "/properties/building",
    name: "Building",
    component: Building,
    exact: true,
  },
  {
    path: "/properties/building/add",
    name: "AddBuilding",
    component: AddBuilding,
  },
  {
    path: "/properties/building/edit",
    name: "EditBuilding",
    component: EditBuilding,
  },
  {
    path: "/properties/unit",
    name: "Unit",
    component: Unit,
    exact: true,
  },
  {
    path: "/properties/unit/add",
    name: "AddUnit",
    component: AddUnit,
  },
  {
    path: "/properties/unit/edit",
    name: "EditUnit",
    component: EditUnit,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/reports",
    name: "Reports",
    component: Reports,
  },
];

export default routes;
