const Navigation = (roleId) => {
  return [
    {
      _tag: "CSidebarNavItem",
      name: "Dashboard",
      to: "/dashboard",
      icon: "cil-speedometer",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Users",
      to: "/users",
      icon: "cil-user",
    },
    {
      _tag: "CSidebarNavDropdown",
      name: "Properties",
      icon: "cil-cog",
      _children:
        roleId === 99
          ? [
              {
                _tag: "CSidebarNavItem",
                name: "Customer",
                to: "/properties/customer",
              },
              {
                _tag: "CSidebarNavItem",
                name: "Building",
                to: "/properties/building",
              },
              {
                _tag: "CSidebarNavItem",
                name: "Amenities",
                to: "/properties/amenities",
              },
            ]
          : [
              {
                _tag: "CSidebarNavItem",
                name: "Building",
                to: "/properties/building",
              },
              {
                _tag: "CSidebarNavItem",
                name: "Amenities",
                to: "/properties/amenities",
              },
            ],
    },
    {
      _tag: "CSidebarNavItem",
      name: "Services",
      to: "/services",
      icon: "cil-devices",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Offers",
      to: "/offers",
      icon: "cil-fingerprint",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Reports",
      to: "/reports",
      icon: "cil-comment-square",
    },
  ];
};

export default Navigation;
