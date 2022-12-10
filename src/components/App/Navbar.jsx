import React, { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DropDownNavbar from "../OtherComponent/IsLogined/DropDownNavbar";
import { clearRedux } from "../../Redux/auth.slice";
import Profile from '../Profile/Profile';
import { GrClose } from 'react-icons/gr'

function Navbar(props) {
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.auth.login.currentUser)
    console.log('Navbar user: ', userInfo);
    const [show, setShow] = useState(false);
    const [tablet, setTablet] = useState(false);
    const navigate = useNavigate();

    const closeNavbar = () => {
        setTablet(false);
    }

    return (
        <>
            <div className="navbar-container">
                <Link to="/" className="logo"><i className="ri-home-heart-fill"></i><span>Soma Recommend</span></Link>
                {
                    <div className={tablet ? 'nav-links nav-tablet' : 'nav-links'}>
                        <ul className={"navbar"}>
                            <GrClose id='close-navbar-icon'
                                onClick={() => setTablet(!tablet)}
                            />
                            <i className="ri-home-heart-fill navbar-item"
                                onClick={() => {navigate('/'); closeNavbar()}}
                            ></i>
                            <li className='navbar-item' onClick={closeNavbar}><NavLink to='search'>Search</NavLink></li>
                            <li className='navbar-item' onClick={closeNavbar}><NavLink to='share'>Share</NavLink></li>
                            <li className='navbar-item' onClick={closeNavbar}><NavLink to='author'>Author</NavLink></li>
                        </ul>
                    </div>
                }
                {userInfo ? (
                    <div className="main">
                        <DropDownNavbar userInfo={userInfo} setShow={setShow} />
                        <div
                            className="bx bx-menu"
                            id="menu-icon"
                            onClick={() => setTablet(!tablet)}
                        ></div>
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
                <Outlet />
                <Profile show={show} setShow={setShow} />
            </div>
        </>
    );
}

export default Navbar;