import React from "react";
import { useEffect } from "react";
import EditPassword from "./EditPassword/EditPassword";
import EditProfile from "./EditProfile/EditProfile";

export default function ProfileRight({ display }) {
  useEffect(() => {
    console.log(display);
  });
  return (
    <div className="profile-right">
      {!display && <EditProfile />}
      {display === 1 && <EditPassword />}
    </div>
  );
}
