import React from "react";
import resources from "../pages/constants";
import amsterdamLogo from "../assets/amsterdam-metropolitan-university-high-resolution-logo-transparent.png";

function Header() {
  return (
    // Navigation bar at the top of the page
    <nav className="bg-white px-8 p-4 shadow-md text-2xl sticky top-0 z-10">
      {/* Container for navigation elements */}
      <div className="flex flex-col md:flex-row md:justify-between items-center max-w-7xl mx-auto">
        {/* Logo on the left side of the navigation bar */}
        <div className="mb-4 md:mb-0 md:mr-4">
          <img
            src={amsterdamLogo}
            alt="Amsterdam Metropolitan University Logo"
            className="h-10"
          />
        </div>
        {/* Navigation links on the right side of the navigation bar */}
        <div className="flex flex-wrap">
          {/* Home link */}
          <div className="text-black mr-4 mb-2 md:mb-0 font-medium text-sm hover:text-lg cursor-not-allowed">
            {resources.nav_home}
          </div>
          {/* Room link */}
          <div className="text-black mr-4 mb-2 md:mb-0 font-medium text-sm hover:text-lg cursor-not-allowed">
            {resources.nav_rooms}
          </div>
          {/* Contact us link */}
          <div className="text-black mb-2 md:mb-0 font-medium text-sm hover:text-lg cursor-not-allowed">
            {resources.nav_contact}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
