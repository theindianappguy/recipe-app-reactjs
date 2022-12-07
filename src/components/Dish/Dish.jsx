import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDish } from "../Api/dish.api";
import "./dish.scss";
import DishOption from "./DishOption/DishOption";
import DishVote from "./DishVote/DishVote";
import Parser from "html-react-parser";
export default function Dish() {
  
  const dispatch = useDispatch();
  const dishData = useSelector((state) => state.dish.dataDish.data);
  
  const param = useParams();
  const [option, setOption] = useState(1);


  useEffect(() => {
    getDish(param.id, dispatch);
  }, [param, dispatch]);
  
  
  return (
    <div className="dish">
      <div className="dish-title">
        <h2>{dishData?.data.title}</h2>
      </div>
      <Container className="dish-container">
        <Row className="dish-container-row-1">
          <Col className="dish-container-row-1-img" md={5}>
            <img
              className="dis-container-row-1-img-main"
              src={dishData?.data.image}
              alt=""
            />
          </Col>
          <Col
            className="dish-container-row-1-ingredient"
            md={{ span: 5, offset: 1 }}
          >
            <ul>
              {dishData?.data?.extendedIngredients?.map((s, index) => {
                return <li key={index}>{`${index + 1}. ${s.original}`}</li>;
              })}
            </ul>
          </Col>
        </Row>
        <Row className="dish-container-row-2">
          <Col className="dish-container-row-2-option" md={3}>
            <DishOption setOption={setOption} />
          </Col>
          <Col
            className="dish-container-row-2-description"
            md={{ span: 7, offset: 1 }}
          >
            {option === 0 && dishData && Parser(dishData?.data.summary)}
            <ul>
              {option === 1 &&
                dishData?.data?.analyzedInstructions[0]?.steps?.map((s, index) => {
                  return <li key={index}>{`Step${s?.number}: ${s?.step}`}</li>;
                })}
            </ul>
            {option === 2 && dishData && "Bao quan ban tu lanh"}
          </Col>
        </Row>
      </Container>
      <DishVote/>
    </div>
  );
}
