import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      isError: false,
      currentUserError: null,
    },
    register: {
      isFetching: false,
      isError: false,
      isSuccess: false,
      registerMessageError: null,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.isError = false;
      state.login.currentUserError = null;
    },
    loginError: (state, action) => {
      state.login.isFetching = false;
      state.login.isError = true;
      state.login.currentUserError = action.payload;
    },
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state) => {
      state.register.isFetching = false;
      state.register.isError = false;
      state.register.isSuccess = true;
      state.register.registerMessageError = null;
    },
    registerError: (state, action) => {
      state.register.isFetching = false;
      state.register.isError = true;
      state.register.isSuccess = false;
      state.register.registerMessageError = action.payload;
    },
    logoutSuccess: (state) => {
      state.login.currentUser = null;
      state.login.isFetching = false;
      state.login.isError = false;
      state.login.currentUserError = null;
    },
    clearRedux: (state) => {
      state.register.registerMessageError = null;
      state.login.currentUserError = null;
    },
  },
});
export const {
  loginStart,
  loginSuccess,
  loginError,
  registerStart,
  registerSuccess,
  registerError,
  logoutSuccess,
  clearRedux,
} = authSlice.actions;
export default authSlice.reducer;
