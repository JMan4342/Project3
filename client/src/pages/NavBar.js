import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-red-800">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          Wander Beyond
          <NavLink
            to="/dashboard"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            BaseCamp|
          </NavLink>
          <NavLink
            to="/camping"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Camping|
          </NavLink>
          <NavLink
            to="/hiking"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Hiking|
          </NavLink>
          <NavLink
            to="/supplies"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Supplies
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
