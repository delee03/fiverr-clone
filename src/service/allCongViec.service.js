import { http } from "./config";

export const allCongViecService = {
    getAllCV: async () => {
        return await http.get("/cong-viec");
    },
};
