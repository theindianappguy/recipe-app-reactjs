import axios from "axios";
import {
  getDishError,
  getDishStart,
  getDishSuccess,
} from "../../Redux/dish.slice";
export const getDish = async (dishData, dispatch) => {
  dispatch(getDishStart());
  try {
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/${dishData}/information?apiKey=${process.env.REACT_APP_FOOD_API_KEY4}`
    );
    console.log(res);
    dispatch(getDishSuccess(res));
  } catch (err) {
    if (err.response) {
      dispatch(getDishError("that bai"));
    }
  }
};
