import axios from "axios";
import { registerStart, loginError, loginStart, loginSuccess, logoutSuccess, registerSuccess, clearRedux, registerError } from "../../Redux/auth.slice";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:3000/login", user);
        dispatch(loginSuccess(res.data));
        localStorage.setItem("access_token", res.data.access_token);
        navigate("/");
    } catch (err) {
        if (err.response) {
            dispatch(loginError("* Email or password is incorrect"));
        }
    }
};
export const loginUserModal = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:3000/login", user);
        dispatch(loginSuccess(res.data));
        localStorage.setItem("access_token", res.data.access_token);
    } catch (err) {
        if (err.response) {
            dispatch(loginError("* Email or password is incorrect"));
        }
    }
};
export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        const res = await axios.post("http://localhost:3000/user", user);
        dispatch(registerSuccess());
        navigate("/login");
    } catch (err) {
        dispatch(registerError("* Email is invalid or already exists"));
    }
};
export const logoutUser = (dispatch, navigate) => {
    dispatch(logoutSuccess());
    navigate("/login");
};
export const deleteError = (dispatch, navigate) => {
    dispatch(clearRedux());
    navigate("/login");
};
