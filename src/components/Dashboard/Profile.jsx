import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileLeft from "../Profile/ProfileLeft/ProfileLeft";
import ProfileRight from "../Profile/ProfileRight/ProfileRight";
import "../../CSS/profile.scss";
function Profile() {
  const [display, setDisplay] = useState(0);
  return (
    <Container className="profile-container">
      <Row className="profile-container-row-1">
        <h1 className="profile-container-row-1-title">PROFILE</h1>
      </Row>
      <Row className="profile-container-row-2">
        <Col
          className="profile-container-row-2-left"
          md={{ span: 3, offset: 1 }}
        >
          <ProfileLeft setDisplay={setDisplay} />
        </Col>
        <Col
          className="profile-container-row-2-right"
          md={{ span: 6, offset: 1 }}
        >
          <ProfileRight display={display} />
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
