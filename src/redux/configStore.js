import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

export const store = configureStore({
    reducer: {
        authSlice: authReducer,
    },

    //Ensure the reducer is correctly combined
});
