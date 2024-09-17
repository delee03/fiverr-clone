import { http } from "./config";

export const chiTietCongViecService = {
    getCTCongViec: async (data, options = {}) => {
        return await http.get(
            `/cong-viec/lay-cong-viec-chi-tiet/${data}`,
            options
        );
    },
    getBinhLuanCongViec: async (idCV, options = {}) => {
        return await http.get(
            `/binh-luan/lay-binh-luan-theo-cong-viec/${idCV}`,
            options
        );
    },
};
