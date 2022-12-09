import React from "react";
import "./editPassword.scss";
export default function EditPassword() {
  return (
    <form className="profile-right-edit-password">
      <h3 className="profile-right-edit-password-title">Edit password</h3>
      <div className="profile-right-edit-password-oldpass">
        <label htmlFor="oldPassword">Enter old password:</label>
        <br />
        <input
          className="old-password"
          placeholder="    Enter old password"
          type="password"
          name="oldPassword"
        />
      </div>
      <div className="profile-right-edit-password-newpass">
        <label htmlFor="newPassword">Enter new password:</label>
        <br />
        <input
          className="new-password"
          placeholder="    Enter new password"
          type="password"
          name="newPassword"
        />
      </div>
      <div className="profile-right-edit-password-confirmpass">
        <label htmlFor="comfirmPassword">Confirm password:</label>
        <br />
        <input
          placeholder="   Confirm password"
          className="confirm-password"
          type="password"
          name="confirmPassword"
        />
      </div>
      <div className="profile-right-edit-password-submit">
        <button
          className="profile-right-edit-password-submit-button"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
