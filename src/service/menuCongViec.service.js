import { http } from "./config";

export const menuCongViecService = {
    getMenuLoaiCongViec: async () => {
        return await http.get("/cong-viec/lay-menu-loai-cong-viec");
    },
};
