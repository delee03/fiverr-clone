import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import nguoiDungSlice from "./nguoiDungSlice";
import congViecSlice from "./congViecSlice";

export const store = configureStore({
    reducer: {
        authSlice: authReducer,
        nguoiDungSlice,
        congViecSlice,
    },

    //Ensure the reducer is correctly combined
});
