import React from "react";

const Dashboard = React.lazy(() => import("../views/dashboard/Dashboard"));
const Users = React.lazy(() => import("../views/users/Users"));
const AddUser = React.lazy(() => import("../views/users/AddUser"));
const Customer = React.lazy(() => import("../views/properties/Customer/Customer"));
const AddCustomer = React.lazy(() => import("../views/properties/Customer/AddCustomer"));
const Buildings = React.lazy(() => import("../views/properties/Building/Buildings"));
const AddBuilding = React.lazy(() => import("../views/properties/Building/AddBuilding"));
const UnitAmenities = React.lazy(() => import("../views/properties/Unit&Amenities/index.js"));
const AddUnit = React.lazy(() => import("../views/properties/Unit&Amenities/Unit/AddUnit"));
const Amenities = React.lazy(() =>
  import("../views/properties/Unit&Amenities/Amenities/Amenities")
);
const AddAmenities = React.lazy(() =>
  import("../views/properties/Unit&Amenities/Amenities/AddAmenities")
);
const Offers = React.lazy(() => import("../views/offers/Offers"));
const OfferDetail = React.lazy(() => import("../views/offers/OfferDetail"));
const AddOffer = React.lazy(() => import("../views/offers/AddOffer"));
const Booking = React.lazy(() => import("../views/booking/Booking"));
const AddBooking = React.lazy(() => import("../views/booking/AddBooking"));
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
    exact: true,
  },
  {
    path: "/properties/customer/add",
    name: "AddCustomer",
    component: AddCustomer,
  },
  {
    path: "/properties/building",
    name: "Building",
    component: Buildings,
    exact: true,
  },
  {
    path: "/properties/building/add",
    name: "AddBuilding",
    component: AddBuilding,
  },
  {
    path: "/properties/unit&amenities",
    name: "UnitAmenities",
    component: UnitAmenities,
    exact: true,
  },
  {
    path: "/properties/unit/add",
    name: "AddUnit",
    component: AddUnit,
  },
  {
    path: "/properties/amenities",
    name: "Amenities",
    component: Amenities,
    exact: true,
  },
  {
    path: "/properties/amenities/add",
    name: "AddAmenities",
    component: AddAmenities,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/offers",
    name: "Offers",
    component: Offers,
    exact: true,
  },
  {
    path: "/offers/add",
    name: "AddOffer",
    component: AddOffer,
  },
  {
    path: "/offers/:id",
    name: "OfferDetail",
    component: OfferDetail,
  },
  {
    path: "/booking",
    name: "Booking",
    component: Booking,
  },
  {
    path: "/booking/add",
    name: "AddBooking",
  },
  {
    path: "/reports",
    name: "Reports",
    component: Reports,
  },
];

export default routes;
