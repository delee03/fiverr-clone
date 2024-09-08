import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { allCongViecService } from "../service/allCongViec.service";

// First, create the thunk
export const getAllCVApi = createAsyncThunk(
    "allCongViec/getAllCVApi",
    async (_, thunkAPI) => {
        const response = await allCongViecService.getAllCV();
        //  console.log(response.data.content);
        return response.data.content;
    }
);

const initialState = {
    allCongViec: [],
};

const congViecSlice = createSlice({
    name: "allCongViec",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCVApi.fulfilled, (state, action) => {
            state.allCongViec = action.payload;
            console.log(action);
        });
    },
});

export const {} = congViecSlice.actions;

export default congViecSlice.reducer;
