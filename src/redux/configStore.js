import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import nguoiDungSlice from "./nguoiDungSlice";
import congViecSlice from "./congViecSlice";
import layMenuLoaiCongViecReducer from "./layMenuLoaiCongViecSlice";

export const store = configureStore({
    reducer: {
        authSlice: authReducer,
        nguoiDungSlice,
        congViecSlice,
        menuCongViec: layMenuLoaiCongViecReducer,
    },

    //Ensure the reducer is correctly combined
});
