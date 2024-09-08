import React, { useEffect, useState } from "react";

import OptionsCV from "../Custom/OptionsCV";
import { getAllCVApi } from "../../redux/congViecSlice";
import { useDispatch, useSelector } from "react-redux";
import { Select, Space } from "antd";
import BreadCrumCustom from "../Custom/BreadCrumCustom";
import TechCarousel from "../Custom/TechCarousel";
import NavMenuLoaiCV from "../NavBar/NavMenuLoaiCV";
import SpinnerCustom from "../Custom/SpinnerCustom";

const ListCongViec = () => {
    const valueAllCongViec = useSelector((state) => state.congViecSlice);
    //console.log(valueAllCongViec.allCongViec);
    const [Loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            dispatch(getAllCVApi());
            await new Promise((resolve) => setTimeout(resolve, 1500)); //đợi cho api trả về 1.5s
            setLoading(false);
        };

        fetchData();
    }, [dispatch]);
    return (
        <section>
            {Loading && <SpinnerCustom title={"Đang lấy dữ liệu"} />}
            <div className="container">
                <NavMenuLoaiCV />
                <BreadCrumCustom
                    title={"All jobs fiverr"}
                    breadcrum={"All jobs"}
                />
                <TechCarousel />
                <OptionsCV />
                <div className="flex justify-between pb-1 mt-8 items-center">
                    <span className="ml-2 text-gray-500">
                        {valueAllCongViec.allCongViec.length}00+ Results
                    </span>
                    <div>
                        <span>Sort by: </span>
                        <Select
                            className="ml-3 font-bold text-lg"
                            defaultValue={"Recommend"}
                            style={{
                                width: 160,
                                fontWeight: 700,
                            }}
                            allowClear
                            options={[
                                {
                                    value: "Recommended",
                                    label: "Recommended",
                                },
                                {
                                    value: "Best Selling",
                                    label: "Best Selling",
                                },
                            ]}
                            placeholder="Filter"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-5 mt-5">
                    {[...valueAllCongViec.allCongViec]
                        .reverse()
                        .map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="border p-3 rounded-xl"
                                >
                                    <img
                                        src={item?.hinhAnh}
                                        className="w-full rounded-lg"
                                        alt=""
                                    />

                                    <div>
                                        <h3 className="font-semibold py-2 min-h-24">
                                            {item?.tenCongViec}
                                        </h3>

                                        <span className="text-yellow-400 space-x-2 ">
                                            <i className="fa-solid fa-star">
                                                {item?.saoCongViec}
                                            </i>
                                        </span>
                                        <span className="text-gray-800 font-semibold">
                                            {item?.danhGia}
                                        </span>
                                    </div>
                                    <div className="mt-2">
                                        <p className="desc-job text-xs">
                                            {item.moTaNgan}
                                        </p>
                                    </div>
                                    {/* lựa chọn yêu thích và giá tiền công việc */}
                                    <div className="flex justify-between items-center mt-3">
                                        <i className="fa-solid fa-heart"></i>
                                        <p className="uppercase font-semibold">
                                            Starting at
                                            <span>
                                                $
                                                {item?.giaTien.toLocaleString()}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
            {/* Breadcrum */}
            {/* Title Page */}
            {/* Các chủ đề */}
            {/* Options và all cv */}
        </section>
    );
};

export default ListCongViec;
