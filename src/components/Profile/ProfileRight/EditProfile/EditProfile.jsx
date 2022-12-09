import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./editProfile.scss";
export default function EditProfile() {
  const user = useSelector((state) => state.auth.login.currentUser);
  const [userName, setUserName] = useState(user?.user.username);
  const [userPhone, setUserPhone] = useState(user?.user.phone);
  const [gender, setGender] = useState(user?.user.gender);
  return (
    <Form className="profile-right-edit-profile">
      <Form.Group className="mb-3 profile-right-edit-profile-name">
        <Form.Label>User name:</Form.Label>
        <Form.Control
          value={userName}
          type="text"
          id=""
          placeholder="Edit user name"
        />
      </Form.Group>
      <Form.Group className="mb-3 profile-right-edit-profile-phone">
        <Form.Label>Phone:</Form.Label>
        <Form.Control type="password" placeholder="Edit phone" />
      </Form.Group>
      <Form.Group className="mb-3 profile-right-edit-profile-email">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" disabled placeholder="email" />
      </Form.Group>
      <Form.Group className="profile-right-edit-profile-sex">
        <Form.Label>Gender:</Form.Label>
        <Form.Check
          type="radio"
          value="MALE"
          className="profile-right-edit-profile-sex-male"
          name="checkSex"
          id="CheckSex"
          label="Male"
          onChange={(e) => setGender(e.target.value)}
        />
        <Form.Check
          type="radio"
          className="profile-right-edit-profile-sex-female"
          name="checkSex"
          id="CheckSex"
          label="Female"
          value="FEMALE"
          onChange={(e) => setGender(e.target.value)}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        className="profile-right-edit-profile-button"
      >
        Submit
      </Button>
    </Form>
  );
}
