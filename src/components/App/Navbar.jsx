import React, { useEffect, useState } from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import DropDownNavbar from "../OtherComponent/IsLogined/DropDownNavbar";
import {clearRedux} from "../../Redux/auth.slice";

function Navbar(props) {
    const dispatch = useDispatch();
    // const [login, setLogin] = useState(false);
    const userInfo = useSelector((state)=> state.auth.login.currentUser)
    // const [userInfo, setUserInfo] = useState();
    console.log('Navbar user: ', userInfo);

    // useEffect(()=> {
    //     setUserInfo(userSelector);
    //     // console.log('Navbar user: ', userSelector);
    //     // console.log(userInfo);
    // }, [userInfo]);

    return (
            <>
                <div className="navbar-container">
                    <Link to="/" className="logo"><i className="ri-home-heart-fill"></i><span>Soma Recommend</span></Link>
                    <ul className="navbar">
                        <li><NavLink to='search'>Search</NavLink></li>
                        <li><NavLink to='share'>Share</NavLink></li>
                        <li><NavLink to='author'>Author</NavLink></li>
                    </ul>
                    { userInfo? (
                        <div className="main">
                            <DropDownNavbar userInfo={userInfo}/>
                            <div className="bx bx-menu" id="menu-icon"></div>
                        </div>
                    ) : (
                        <div className="main">
                            <Link
                                onClick={() => dispatch(clearRedux())}
                                to="login"
                                className="user-login-link"
                            >
                                <i className="ri-user-fill"></i>Sign In
                            </Link>
                            <Link onClick={() => dispatch(clearRedux())} to="register">
                                Register
                            </Link>
                            <div className="bx bx-menu" id="menu-icon"></div>
                        </div>
                    )}
                </div>
                <div className="App-content">
                    <Outlet/>
                </div>
            </>
    );
}

export default Navbar;