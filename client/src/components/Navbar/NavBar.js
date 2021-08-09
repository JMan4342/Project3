import React from "react";
import tentImage from "./images/tent4.png"

export default function NavBar() {
  return (
<nav className="navbar navbar-expand-sm navbar-light bg-light  ">
  <div className="container-fluid">
    <a className="navbar-brand" >Wander Beyond</a>
    <img
                src={tentImage}
                alt="css shield"
               
              />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse ml-auto" id="navbarNav">
      <ul class="navbar-nav ">

        {/* <li class="nav-item">
        This was a DOUBLE ROUTE for HOME 
          <a class="nav-link active" aria-current="page" href="#"></a>
        </li> */}
        <li class="nav-item">
          <a class="nav-link" href="/parks">Parks</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/hiking">Hiking</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/camping">Camping</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register">Register </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/dashboard">Basecamp</a>
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
