import React from "react";
import tentImage from "./tent.jpg"

export default function NavBar() {
  return (
<nav class="navbar navbar-expand-sm navbar-light bg-light  ">
  <div class="container-fluid">
    <a class="navbar-brand" >Wander Beyond</a>
    <img
                src={tentImage}
                alt="css shield"
               
              />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse ml-auto" id="navbarNav">
      <ul className="navbar-nav  ">
      <li className="nav-item">
          <a className="nav-link" href="/home">Home</a>
        </li>
      
        <li className="nav-item">
          <a className="nav-link" href="/dashboard">Basecamp</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/camping">Camping</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/hiking">Activities</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/parks">Parks</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/register">Register</a>
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
