import { http } from "./config";

export const chiTietCongViecService = {
    getCTCongViec: async (data) => {
        return await http.get(`/cong-viec/lay-cong-viec-chi-tiet/${data}`);
    },
};
