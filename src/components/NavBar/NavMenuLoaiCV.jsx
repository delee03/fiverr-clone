import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuLoaiCongViecApi } from "../../redux/layMenuLoaiCongViecSlice";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";

const NavMenuLoaiCV = () => {
    const [CTLoaiCV, setCTLoaiCV] = useState([]);
    const dsMenuLoaiCV = useSelector(
        (state) => state.menuCongViec.arrMenuLoaiCV
    );
    const dispatch = useDispatch();

    //console.log(dsMenuLoaiCV);
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
    }
    getDsNhomCTLoaiByIdLoai(1);

    function getDSCTLoaiByIdNhom() {
        CTLoaiCV?.map((item, index) => {
            console.log(item.dsChiTietLoai);
            console.log(item.dsChiTietLoai);
        });
    }
    console.log(CTLoaiCV);
    getDSCTLoaiByIdNhom();

    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
    };
    const items = [
        {
            label: "1st menu item",
            key: "1",
        },
        {
            label: "2nd menu item",
            key: "2",
        },
        {
            label: "3rd menu item",
            key: "3",
        },
    ];

    //getDsNhomCTLoai();
    return (
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
                        <li
                            key={index}
                            onMouseOver={() => {
                                getDsNhomCTLoaiByIdLoai(item.id);
                                setCTLoaiCV(getDsNhomCTLoaiByIdLoai(item.id));
                            }}
                            className="hover:border-b-4 py-2 hover:border-b-green-500 h-10"
                        >
                            {item.tenLoaiCongViec}
                            <Dropdown
                                menu={{
                                    items,
                                    onClick,
                                }}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <DownOutlined />
                                </a>
                            </Dropdown>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default NavMenuLoaiCV;
