import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import nguoiDungSlice from "./nguoiDungSlice";

export const store = configureStore({
    reducer: {
        authSlice: authReducer,
        nguoiDungSlice,
    },

    //Ensure the reducer is correctly combined
});
