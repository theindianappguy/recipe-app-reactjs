import React from "react";

export default function ProfileLeftOption({ setDisplay }) {
  return (
    <div className="profile-left-option">
      <button
        onClick={() => setDisplay(0)}
        className="profile-left-option-edit-profile"
      >
        Edit profile
      </button>
      <button
        onClick={() => setDisplay(1)}
        className="profile-left-option-edit-password"
      >
        Edit password
      </button>
    </div>
  );
}
