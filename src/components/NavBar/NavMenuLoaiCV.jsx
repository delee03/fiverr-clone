import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuLoaiCongViecApi } from "../../redux/layMenuLoaiCongViecSlice";
import { Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";

const NavMenuLoaiCV = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [items, setItems] = useState([]);
    const [hoveredItemId, setHoveredItemId] = useState(null); // Quản lý ID của mục đang được hover
    const dsMenuLoaiCV = useSelector(
        (state) => state.menuCongViec.arrMenuLoaiCV
    );
    const dispatch = useDispatch();

    console.log(dsMenuLoaiCV);
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
            if (item.id == id) {
                console.log(item.dsNhomChiTietLoai);
                return item.dsNhomChiTietLoai;
            }
        }
        return [];
    }
    // Hàm tạo menu dựa trên item được truyền vào
    const createMenu = (itemId) => {
        const dsNhomCTLoai = getDsNhomCTLoaiByIdLoai(itemId);

        // Tạo các phần tử menu từ danh sách nhóm chi tiết loại
        return (
            <Menu>
                {dsNhomCTLoai.map((nhomItem, index) => (
                    <Menu.Item key={index}>
                        <Link className="flex items-center space-x-4">
                            <h5 className="bg-white shadow-lg text-black">
                                {nhomItem.tenNhom}
                            </h5>
                        </Link>
                    </Menu.Item>
                ))}
            </Menu>
        );
    };

    // function getDSCTLoaiByIdNhom() {
    //     CTLoaiCV?.map((item, index) => {
    //         console.log(item.dsChiTietLoai);
    //         //console.log(item.dsChiTietLoai);
    //     });
    // }
    // console.log(CTLoaiCV);
    // getDSCTLoaiByIdNhom();

    const handleMouseOver = (item) => {
        const dsNhomCTLoai = getDsNhomCTLoaiByIdLoai(item.id);

        // Setting the items as Menu.Item elements directly
        const menuItems = dsNhomCTLoai.map((nhomItem, index) => (
            <Menu.Item key={index}>
                <Link className="flex items-center space-x-4">
                    <h5 className="bg-white shadow-lg text-black">
                        {nhomItem.tenNhom}
                    </h5>
                </Link>
            </Menu.Item>
        ));

        setItems(menuItems);
        setOpenDropdown(true);
    };
    const handleOnMouseOut = () => {
        setOpenDropdown(false);
    };

    // Pass the items directly to the Menu component
    const menu = <Menu>{items}</Menu>;

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
                        return (
                            <>
                                <li
                                    key={index}
                                    onMouseOver={() =>
                                        setHoveredItemId(item.id)
                                    } // Cập nhật ID của mục đang hover
                                    onMouseOut={() => setHoveredItemId(null)} // Reset lại khi chuột rời khỏi mục
                                    className="hover:border-b-4 py-2 hover:border-b-green-500 h-10"
                                >
                                    {/* {item.tenLoaiCongViec} */}
                                    {/* Hiển thị Dropdown riêng cho từng li */}
                                    <Dropdown
                                        overlay={createMenu(item.id)} // Tạo menu dựa trên ID của item
                                        placement="bottom"
                                        open={hoveredItemId === item.id} // Chỉ mở khi mục này đang được hover
                                        arrow={{
                                            pointAtCenter: true,
                                        }}
                                    >
                                        <a onClick={(e) => e.preventDefault()}>
                                            {item.tenLoaiCongViec}
                                        </a>
                                    </Dropdown>
                                </li>
                            </>
                        );
                    })}
                </ul>
                <Dropdown
                    overlay={menu}
                    placement="bottom"
                    open={openDropdown}
                    onOpenChange={setOpenDropdown}
                    arrow={{
                        pointAtCenter: true,
                    }}
                >
                    <a onClick={(e) => e.preventDefault()}></a>
                </Dropdown>
            </div>
        </>
    );
};

export default NavMenuLoaiCV;
