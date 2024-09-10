import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { menuCongViecService } from "../service/menuCongViec.service";

// First, create the thunk
export const getMenuLoaiCongViecApi = createAsyncThunk(
    "menuCongViec/getMenuLoaiCongViecApi",
    async (_, thunkAPI) => {
        const response = await menuCongViecService.getMenuLoaiCongViec();
        // console.log(response);
        return response.data.content;
    }
);

const initialState = {
    arrMenuLoaiCV: [],
};

const layMenuLoaiCongViecSlice = createSlice({
    name: "menuCongViec",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getMenuLoaiCongViecApi.fulfilled, (state, action) => {
            state.arrMenuLoaiCV = action.payload;
            // console.log(action);
        });
    },
});

export const {} = layMenuLoaiCongViecSlice.actions;

export default layMenuLoaiCongViecSlice.reducer;
