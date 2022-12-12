import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "user",
    initialState: {
        dataUser: {
            data: null,
            isSuccess: false,
            isFetching: false,
            isErrors: false,
            dataError: null,
        },
    },
    reducers: {
        getUserStart: (state) => {
            state.dataUser.isFetching = true;
        },
        getUserSuccess: (state, action) => {
            state.dataUser.isFetching = false;
            state.dataUser.isSuccess = true;
            state.dataUser.isErrors = false;
            state.dataUser.data = action.payload;
            state.dataUser.dataError = null;
        },
        getUserError: (state, action) => {
            state.dataUser.isErrors = true;
            state.dataUser.isSuccess = false;
            state.dataUser.isFetching = false;
            state.dataUser.dataError = action.payload;
        },
        updateUserStart: (state) => {
            state.dataUser.isFetching = true;
        },
        updateUserSuccess: (state, action) => {
            state.dataUser.isFetching = false;
            state.dataUser.isSuccess = true;
            state.dataUser.isErrors = false;
            state.dataUser.data = action.payload;
            state.dataUser.dataError = null;
        },
        updateUserError: (state, action) => {
            state.dataUser.isErrors = true;
            state.dataUser.isSuccess = false;
            state.dataUser.isFetching = false;
            state.dataUser.dataError = action.payload;
        },
    },
});
export const { getUserStart, getUserSuccess, getUserError, updateUserStart, updateUserSuccess, updateUserError } = userSlice.actions;
export default userSlice.reducer;