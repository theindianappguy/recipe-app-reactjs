import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function IsLogined() {
  const avatar = useSelector((state) => state.auth.login.currentUser);
  const [token, setToken] = useState("");
  const webToken = localStorage.getItem("access_token");
  useEffect(() => {
    setToken(webToken);
  }, [setToken, webToken]);
  return (
    <div>
      {token ? (
        <div className="main">
          <div className="info-user">
            <img src="" alt="photo" />
          </div>
        </div>
      ) : (
        <div className="main">
          <Link to="login" className="user">
            <i className="ri-user-fill"></i>Sign In
          </Link>
          <Link to="register">Register</Link>
          <div className="bx bx-menu" id="menu-icon"></div>
        </div>
      )}
    </div>
  );
}
