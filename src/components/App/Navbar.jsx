import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";

function Navbar(props) {
    return (
            <>
                <div className="navbar-container">
                    <Link to="/" className="logo"><i className="ri-home-heart-fill"></i><span>FOOD RECIPE</span></Link>
                    <ul className="navbar">
                        <li><NavLink to='search'>Search</NavLink></li>
                        <li><NavLink to='share'>Share</NavLink></li>
                        <li><NavLink to='author'>Author</NavLink></li>
                        <li><NavLink to='profile'>Profile</NavLink></li>
                    </ul>
                    <div className="main">
                        <Link to='login' className="user"><i className="ri-user-fill"></i>Sign In</Link>
                        <Link to='register'>Register</Link>
                        <div className="bx bx-menu" id="menu-icon"></div>
                    </div>
                </div>
                <div className="App-content">
                    <Outlet/>
                </div>
            </>
    );
}

export default Navbar;