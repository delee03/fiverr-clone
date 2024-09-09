import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { congViecTheoChiTietLoaiService } from "../service/congViecTheoChiTietLoai.service";

// First, create the thunk
export const getCVTheoChiTietLoaiApi = createAsyncThunk(
    "cvtheoChiTietLoai/getCVTheoChiTietLoaiApi",
    async (maCTLoai, thunkAPI) => {
        const response =
            await congViecTheoChiTietLoaiService.congViecTheoCTLoaiService(
                maCTLoai
            );
        //  console.log(response.data.content);
        return response.data.content;
    }
);

const initialState = {
    congViecTheoChiTietLoai: [],
};

const congViecTheoChiTietLoaiSlice = createSlice({
    name: "cvtheoChiTietLoai",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCVTheoChiTietLoaiApi.fulfilled, (state, action) => {
            state.congViecTheoChiTietLoai = action.payload;
            console.log(action);
        });
    },
});

export const {} = congViecTheoChiTietLoaiSlice.actions;

export default congViecTheoChiTietLoaiSlice.reducer;
