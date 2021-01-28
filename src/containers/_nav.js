import React from "react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

const roleId = localStorage.getItem("roleId");

export const navigation = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon content={freeSet.cilSpeedometer} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Users",
    to: "/users",
    icon: <CIcon content={freeSet.cilUser} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Properties",
    icon: <CIcon content={freeSet.cilCog} customClasses="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Building",
        to: "/properties/building",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Services",
    to: "/services",
    icon: <CIcon content={freeSet.cilDevices} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Reports",
    to: "/reports",
    icon: <CIcon content={freeSet.cilCommentSquare} customClasses="c-sidebar-nav-icon" />,
  },
];

if (roleId === "99") {
  console.log("here ===> ", roleId);

  navigation[2]._children.unshift({
    _tag: "CSidebarNavItem",
    name: "Customer",
    to: "/properties/customer",
  });
}
