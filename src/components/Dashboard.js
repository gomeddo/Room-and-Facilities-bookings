import React from "react";
import DashboardFilters from "./DashboardFilters";
import Rooms from "./Rooms";

function Dashboard() {
  return (
    <div className="flex p-6 bg-gray-200 max-h-full pt-10 pb-10">
      {/* Left portion taking 1/4 of the page  */}
      <DashboardFilters />

      <Rooms />
    </div>
  );
}

export default Dashboard;