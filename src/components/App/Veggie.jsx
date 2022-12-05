import { useEffect, useState } from "react";
import styled from "styled-components";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import { Link } from "react-router-dom";

const Veggie = () => {
  const [veggies, setVeggies] = useState([]);

  const getVeggies = async () => {
    const getData = localStorage.getItem("veggies");

    if (getData && getData !== "undefined") {
      setVeggies(JSON.parse(getData));
    } else {
      const resp = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_FOOD_API_KEY4}&tags=vegetarian&number=10`
      );
      const data = await resp.json();
      setVeggies(data.recipes);
      localStorage.setItem("veggies", JSON.stringify(data.recipes));
      console.log(data.recipes);
    }
  };

  useEffect(() => {
    getVeggies();
  }, []);

  return (
    <Wrapper>
      <h3>Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 5,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "4rem",
          breakpoints: {
            767: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            },
          },
        }}
      >
        {veggies?.map(({ title, id, image }) => (
          <SplideSlide key={id}>
            <Card>
              <Link to={`/dish/${id}`}>
                <p>{title}</p>
                <img src={image} alt={title} />
                <Gradient />
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 2rem;
  h3 {
    margin-bottom: 50px;
  }
`;

const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }

  p {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    text-align: center;
    color: #fff;
    width: 100%;
    height: 40%;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  z-index: 3;
  border-radius: 2rem;
`;

export default Veggie;
