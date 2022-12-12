import {
    getUserStart,
    getUserSuccess,
    getUserError,
    updateUserStart,
    updateUserSuccess,
    updateUserError
} from "../../Redux/user.slice";
import axios from "axios";

const baseURL = 'http://localhost:3000/user';

export const getUser = (id, dispatch) => {
    dispatch(getUserStart());
    axios.get(`${baseURL}/${id}`)
        .then(response => {
            dispatch(getUserSuccess(response.data));
        })
        .catch(error => {
            if (error.response) {
                dispatch(getUserError("Get user failed"));
            }
        })
}

export const updateUser = (id, userUpdate, dispatch, toast) => {
    dispatch(updateUserStart());
    axios.patch(`${baseURL}/${id}`, userUpdate)
        .then(response => {
            dispatch(updateUserSuccess(response.data));
            localStorage.setItem("currentUserLoggedIn", JSON.stringify(response.data));
            console.log('update user success!', response.data)
            toast('✅ Update user success!');
        })
        .catch(error => {
            if (error.response) {
                dispatch(updateUserError("Update user failed"));
            }
        })
}

export const updatePassword = (id, password, setUpdatePassword, toast) => {
    console.log('id: ', id);
    axios.patch(`${baseURL}/update-pass/${id}`, {password: password})
        .then(() => {
            setTimeout(() => {
                setUpdatePassword(false);
            }, 2000);
            toast('✅ Update password success!');
        })
        .catch(error => {
            console.log(error)
            if (error.response) {
                toast('❌ Update user password failed!');
            }
        })
}