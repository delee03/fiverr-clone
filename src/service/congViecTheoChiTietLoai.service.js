import { http } from "./config";
export const congViecTheoChiTietLoaiService = {
    congViecTheoCTLoaiService: async (maCTLoai) => {
        return await http.get(
            `/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${maCTLoai}`
        );
    },
};
