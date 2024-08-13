import { http } from "./config";

export const congViecService = {
    layCongViecTheoTen: async (data) => {
        return await http.get(
            `/cong-viec/lay-danh-sach-cong-viec-theo-ten/${data}`
        );
    },
};
