import { http } from "./config";

export const loaiCongViecService = {
    getLoaiCongViec: async () => {
        return await http.get("/loai-cong-viec");
    },
};
