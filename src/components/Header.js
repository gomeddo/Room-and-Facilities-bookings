import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-white px-8 p-4 flex shadow-md flex-col md:flex-row md:justify-between items-center text-2xl sticky top-0 z-10">
      {/* Text on the left */}
      <div className="text-black font-bold mb-4 md:mb-0 md:mr-4">Amsterdam Metropolitan University</div>
      {/* Nav Links on the right*/}
      <div className="flex flex-wrap">
        <Link to="/" className="text-black mr-4 mb-2 md:mb-0 font-medium text-sm">Home</Link>
        <Link to="/about" className="text-black mr-4 mb-2 md:mb-0 font-medium text-sm">Room</Link>
        <Link to="/contact" className="text-black mb-2 md:mb-0 font-medium text-sm">Contact us{" "}</Link>
      </div>
    </nav>
  );
}

export default Header;