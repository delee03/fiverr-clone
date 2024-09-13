import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuLoaiCongViecApi } from "../../redux/layMenuLoaiCongViecSlice";
import { Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";

const NavMenuLoaiCV = ({ handleCheck }) => {
    const [hoveredItemId, setHoveredItemId] = useState(null); // Quản lý ID của mục đang được hover
    const dsMenuLoaiCV = useSelector(
        (state) => state.menuCongViec.arrMenuLoaiCV
    );
    const dispatch = useDispatch();

    // console.log(dsMenuLoaiCV);
    // console.log(dsMenuLoaiCV.dsNhomChiTietLoai);
    useEffect(() => {
        dispatch(getMenuLoaiCongViecApi());
    }, [dispatch]);

    // function getDsNhomCTLoai() {
    //     dsMenuLoaiCV.map((item, index) => {
    //         console.log(item.dsNhomChiTietLoai);
    //     });
    // }

    function getDsNhomCTLoaiByIdLoai(id) {
        for (let item of dsMenuLoaiCV) {
            if (item.id === id) {
                //console.log(item.dsNhomChiTietLoai);
                return item.dsNhomChiTietLoai;
            }
        }
        // return [];
    }
    // Hàm tạo menu dựa trên item được truyền vào
    const createMenu = (itemId) => {
        const dsNhomCTLoai = getDsNhomCTLoaiByIdLoai(itemId);

        if (!Array.isArray(dsNhomCTLoai)) {
            return [];
        }
        // Tạo các phần tử menu từ danh sách nhóm chi tiết loại
        return dsNhomCTLoai.map((nhomItem, index) => ({
            key: index.toString(),
            label: (
                <div onClick={() => console.log(nhomItem.dsChiTietLoai)}>
                    <h5 className="font-semibold p-1 mt-1 text-base">
                        {nhomItem?.tenNhom}
                    </h5>
                    <ul className="mt-1 ml-1">
                        {nhomItem?.dsChiTietLoai?.map((item, subIndex) => (
                            <li
                                key={subIndex}
                                onClick={() => handleCheck(item.id)}
                                className="mb-1 py-2 w-full h-full px-1 text-base rounded-lg text-gray-500 hover:!text-black"
                            >
                                {item.tenChiTiet}
                            </li>
                        ))}
                    </ul>
                </div>
            ),
        }));
    };

    return (
        <>
            <div>
                <ul
                    className="flex items-center  gap-6 mb-6 text-gray-700"
                    style={{
                        borderTop: "2px solid rgba(85, 85, 85, .2)",
                        borderBottom: "2px solid rgba(85, 85, 85, .2 )",
                    }}
                >
                    {dsMenuLoaiCV.slice(0, 9).map((item, index) => {
                        // let items = createMenu(item.id);
                        return (
                            <>
                                <li
                                    key={index}
                                    onMouseOver={() =>
                                        setHoveredItemId(item.id)
                                    } // Cập nhật ID của mục đang hover
                                    onMouseOut={() => setHoveredItemId(null)} // Reset lại khi chuột rời khỏi mục
                                    className="hover:border-b-4 py-2 hover:border-b-green-500 h-10 "
                                >
                                    {/* {item.tenLoaiCongViec} */}
                                    {/* Hiển thị Dropdown riêng cho từng li */}
                                    <Dropdown
                                        menu={{ items: createMenu(item.id) }} // Tạo menu dựa trên ID của item
                                        placement="bottom"
                                        className="mt-4 "
                                        open={hoveredItemId === item.id} // Chỉ mở khi mục này đang được hover
                                    >
                                        <a>{item.tenLoaiCongViec}</a>
                                    </Dropdown>
                                </li>
                            </>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default NavMenuLoaiCV;
