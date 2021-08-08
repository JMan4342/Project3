import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
<nav class="navbar navbar-expand-sm navbar-light bg-light  ">
  <div class="container-fluid">
    <a class="navbar-brand" >Wander Beyond</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse ml-auto" id="navbarNav">
      <ul class="navbar-nav  ">
      <li class="nav-item">
          <a class="nav-link" href="/home">Home</a>
        </li>
      
        <li class="nav-item">
          <a class="nav-link" href="/dashboard">Basecamp</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/camping">Camping</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/hiking">Activities</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/parks">Parks</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register">Register</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

    // <header>
    //   <div>
    //     <nav>
    //       Wander Beyond
    //       <NavLink to="/dashboard">BaseCamp |</NavLink>
    //       <NavLink to="/camping">Camping |</NavLink>
    //       <NavLink to="/hiking">Hiking |</NavLink>
    //       <NavLink to="/Parks">Parks |</NavLink>
    //       <NavLink to="/register">Register |</NavLink>
    //       <NavLink to="/home">Home</NavLink>
    //     </nav>
    //   </div>
    // </header>
  );
}
