import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Redux/auth.slice";
import dishReducer from "./Redux/dish.slice";
const rootReducer = {
  auth: authReducer,
  dish: dishReducer,
};
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
