import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { userVote } from "../../Api/dish.api";
import "./dishVote.scss";
import ModalLogin from "./ModalLogin";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function DishVote() {
  const param = useParams();
  const loginedUser = useSelector((state) => state.auth.login.currentUser);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);
  const handleClickStar = (value) => {
    setCurrentValue(value);
  };
  const handleClick = () => {
    const data = {
      recipe_id: Number(param.id),
      user_id: loginedUser.user.id,
      amount_star: currentValue,
    };
    console.log(data);
    userVote(data);
    toast.success("Voted success", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className="dish-vote" style={styles.container}>
      <div className="dish-vote-star" style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClickStar(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>
      <ModalLogin handleClick={handleClick} />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};

export default DishVote;
