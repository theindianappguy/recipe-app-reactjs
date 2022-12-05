import { createSlice } from "@reduxjs/toolkit";
const dishslice = createSlice({
  name: "dish",
  initialState: {
    dataDish: {
      data: null,
      isSuccess: false,
      isFetching: false,
      isErrors: false,
      dataError: null,
    },
  },
  reducers: {
    getDishStart: (state) => {
      state.dataDish.isFetching = true;
    },
    getDishSuccess: (state, action) => {
      state.dataDish.isFetching = false;
      state.dataDish.isSuccess = true;
      state.dataDish.isErrors = false;
      state.dataDish.data = action.payload;
      state.dataDish.dataError = null;
    },
    getDishError: (state, action) => {
      state.dataDish.isErrors = true;
      state.dataDish.isSuccess = false;
      state.dataDish.isFetching = false;
      state.dataDish.dataError = action.payload;
    },
  },
});
export const { getDishError, getDishStart, getDishSuccess } = dishslice.actions;
export default dishslice.reducer;
