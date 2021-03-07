import React from "react";
const SystemsManagerDashboard = React.lazy(() =>
  import("./views/manager_dashboard/Dashboard")
);
const TechnicianDashboard = React.lazy(() =>
  import("./views/technician_dashboard/Dashboard")
);

const routes = [
  { path: "/", exact: true, name: "Home" },
  {
    path: "/manager",
    name: "Systems Manager Dashboard",
    component: SystemsManagerDashboard,
  },
  {
    path: "/technician",
    name: "Technician Dashboard",
    component: TechnicianDashboard,
  },
];

export default routes;
