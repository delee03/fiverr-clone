import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { allCongViecService } from "../service/allCongViec.service";
import { congViecTheoChiTietLoaiService } from "../service/congViecTheoChiTietLoai.service";

// First, create the thunk
export const getAllCVApi = createAsyncThunk(
    "allCongViec/getAllCVApi",
    async (_, thunkAPI) => {
        const response = await allCongViecService.getAllCV();
        //  console.log(response.data.content);
        return response.data.content;
    }
);

// Thunk to get jobs by detail category
export const getCVTheoCTLoaiApi = createAsyncThunk(
    "allCongViec/getCVTheoCTLoaiApi",
    async (maCTLoai, thunkAPI) => {
        const response =
            await congViecTheoChiTietLoaiService.congViecTheoCTLoaiService(
                maCTLoai
            );
        return response.data.content;
    }
);

const initialState = {
    allCongViec: [],
    layCongViecTheoChiTietLoai: [],
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

        builder.addCase(getCVTheoCTLoaiApi.fulfilled, (state, action) => {
            state.layCongViecTheoChiTietLoai = action.payload;
            console.log(action);
        });
    },
});

export const {} = congViecSlice.actions;

export default congViecSlice.reducer;
