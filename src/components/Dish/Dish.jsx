import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./dish.scss";
import DishOption from "./DishOption/DishOption";
import DishVote from "./DishVote/DishVote";
export default function Dish() {
  return (
    <div className="dish">
      <div className="dish-title">
        <h1>Com rang dua bo</h1>
      </div>
      <Container className="dish-container">
        <Row className="dish-container-row-1">
          <Col className="dish-container-row-1-img" md={5}>
            <img
              className="dis-container-row-1-img-main"
              src="http://cdn.tgdd.vn/Files/2022/01/06/1409476/cach-lam-com-rang-dua-bo-tai-nha-ngon-nhu-ngoai-hang-202201061628031278.jpg"
              alt=""
            />
          </Col>
          <Col
            className="dish-container-row-1-ingredient"
            md={{ span: 5, offset: 1 }}
          >
            Nguyen lieu
          </Col>
        </Row>
        <Row className="dish-container-row-2">
          <Col className="dish-container-row-2-option" md={3}>
            <DishOption />
          </Col>
          <Col
            className="dish-container-row-2-description"
            md={{ span: 7, offset: 1 }}
          >
            Cac buoc thuc hien
          </Col>
        </Row>
      </Container>
      <DishVote />
    </div>
  );
}
