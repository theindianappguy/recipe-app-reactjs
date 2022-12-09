import React from "react";
import { useSelector } from "react-redux";
import "./profileLeft.scss";
import ProfileLeftOption from "./ProfileLeftOption/ProfileLeftOption";
export default function ProfileLeft({ setDisplay }) {
  const user = useSelector((state) => state.auth.login.currentUser);
  return (
    <div className="profile-left">
      <div className="profile-left-info">
        <img
          className="profile-left-info-image"
          src={
            user?.avatar ||
            "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          }
          alt=""
        />
        <div className="profile-left-info-name">
          {user?.username || "No info"}
        </div>
      </div>
      <ProfileLeftOption setDisplay={setDisplay} />
    </div>
  );
}
