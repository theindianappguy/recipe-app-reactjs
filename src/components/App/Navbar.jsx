import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import DropDownNavbar from "../OtherComponents/IsLogined/DropDownNavbar";
// import IsLogined from "../OtherComponents/IsLogined/IsLogined";

function Navbar(props) {
  const user = useSelector((state) => state.auth.login.currentUser);
  return (
    <>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <i className="ri-home-heart-fill"></i>
          <span>FOOD RECIPE</span>
        </Link>
        <ul className="navbar">
          <li>
            <NavLink to="search">Search</NavLink>
          </li>
          <li>
            <NavLink to="share">Share</NavLink>
          </li>
          <li>
            <NavLink to="author">Author</NavLink>
          </li>
          <li>
            <NavLink to="profile">Profile</NavLink>
          </li>
        </ul>
        {user ? (
          <div className="main">
            <DropDownNavbar />
            <div className="bx bx-menu" id="menu-icon"></div>
          </div>
        ) : (
          <div className="main">
            <Link to="login" className="user-login-link">
              <i className="ri-user-fill"></i>Sign In
            </Link>
            <Link to="register">Register</Link>
            <div className="bx bx-menu" id="menu-icon"></div>
          </div>
        )}
      </div>
      <div className="App-content">
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;
