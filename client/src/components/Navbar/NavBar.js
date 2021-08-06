import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <div>
        <nav>
          Wander Beyond
          <NavLink to="/dashboard">BaseCamp |</NavLink>
          <NavLink to="/camping">Camping |</NavLink>
          <NavLink to="/hiking">Hiking |</NavLink>
          <NavLink to="/Parks">Parks |</NavLink>
          <NavLink to="/register">Register |</NavLink>
          <NavLink to="/home">Home</NavLink>
        </nav>
      </div>
    </header>
  );
}
