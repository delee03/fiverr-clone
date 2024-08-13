import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nguoiDungService } from "../service/nguoiDung.service";

export const getValueUserApi = createAsyncThunk(
    "nguoiDung/getValueUserApi",
    async (_, thunkAPI) => {
        const resolve = await nguoiDungService.getListUser();
        console.log(resolve);
        return resolve.data.content;
    }
);

const initialState = {
    listNguoiDung: [],
};

//redux thunk tự quản lí trên redux xử lí bên middleware => extra reducers có 3 trạng thái mỗi trường hợp có các hàm tương ứng
const nguoiDungSlice = createSlice({
    name: "nguoiDung",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getValueUserApi.fulfilled, (state, action) => {
            console.log(action);
            state.listNguoiDung = action.payload;
        });
        builder.addCase(getValueUserApi.rejected, (state, action) => {
            console.log(action);
        });
        // builder.addCase(getValueUserApi.pending, (state, action) => {
        //     console.log(action);
        // });
    },
});

export const {} = nguoiDungSlice.actions;

export default nguoiDungSlice.reducer;
