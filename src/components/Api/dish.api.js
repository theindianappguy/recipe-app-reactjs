import axios from "axios";
import { toast } from "react-toastify";

import {
  getDishError,
  getDishStart,
  getDishSuccess,
} from "../../Redux/dish.slice";
export const getDish = async (dishData, dispatch) => {
  dispatch(getDishStart());
  try {
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/${dishData}/information?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&includeNutrition=true`
    );
    dispatch(getDishSuccess(res));
  } catch (err) {
    if (err.response) {
      dispatch(getDishError("that bai"));
    }
  }
};
export const userVote = async (data) => {
  try {
    const res = await axios.post("http://localhost:3000/voting", data);
    toast.success("Voting success!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (err) {
    toast.error("voting error!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};
export const userVoted = async (data) => {
  try {
    return await axios.get(`http://localhost:3000/voting/${data}`);
  } catch (err) {
    console.log(err);
  }
};
