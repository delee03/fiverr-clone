import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuLoaiCongViecApi } from "../../redux/layMenuLoaiCongViecSlice";

const NavMenuLoaiCV = () => {
    const dsMenuLoaiCV = useSelector(
        (state) => state.menuCongViec.arrMenuLoaiCV
    );
    const dispatch = useDispatch();

    console.log(dsMenuLoaiCV);
    console.log(dsMenuLoaiCV.dsNhomChiTietLoai);
    useEffect(() => {
        dispatch(getMenuLoaiCongViecApi());
    }, [dispatch]);
    return (
        <div>
            <ul
                className="flex items-center  gap-6 mb-6 text-gray-700"
                style={{
                    borderTop: "2px solid rgba(85, 85, 85, .2)",
                    borderBottom: "2px solid rgba(85, 85, 85, .2 )",
                }}
            >
                {dsMenuLoaiCV.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className="hover:border-b-4 py-2 hover:border-b-green-500 h-10"
                        >
                            {item.tenLoaiCongViec}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default NavMenuLoaiCV;
