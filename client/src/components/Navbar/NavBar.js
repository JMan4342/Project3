import React, { useState } from "react";
import tentImage from "./images/tent4.png"
import Auth from '../../utils/auth';

export default function NavBar() {

 


  return (
<nav className="navbar navbar-expand-sm navbar-light bg-light  ">
  <div className="container-fluid">
    <a className="navbar-brand" >Wander Beyond</a>
    <img className="tentImage"
                src={tentImage}
                alt="css shield"
               
              />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse ml-auto" id="navbarNav">
      <ul className="navbar-nav ">

        {/* <li className="nav-item">
        This was a DOUBLE ROUTE for HOME 
          <a className="nav-link active" aria-current="page" href="#"></a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="/parks">Parks</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/hiking">Hiking</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/camping">Camping</a>
        </li>
        
        <li className="nav-item">
          {Auth.loggedIn()  ?(<a className="nav-link" onClick={Auth.logout}>Logout</a>) : (<a className="nav-link" href="/login">Login</a>)}
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/register">Register </a> */}
          {Auth.loggedIn()  ?(<></>) : (<a className="nav-link" href="/register">Register</a>)}
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/dashboard">Basecamp</a>
        </li>
       
      </ul>
    </div>
    {/* Might go back to this later, need to get user's name to put on */}
    {/* {Auth.loggedIn() ?(<><h3>Welcome {" "} username </h3></>):(<></>)} */}
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
