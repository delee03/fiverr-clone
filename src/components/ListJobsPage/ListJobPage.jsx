import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { congViecService } from "../../service/congviec.service";

const ListJobPage = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    const [listJob, setListJob] = React.useState([]);
    console.log(searchParam.get("tenCongViec"));

    useEffect(() => {
        let tenCongViec = searchParam.get("tenCongViec");
        congViecService
            .layCongViecTheoTen(tenCongViec)
            .then((res) => {
                console.log(res);
                setListJob(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [searchParam.get("tenCongViec")]);
    return (
        <div className="container">
            <h1 className="text-3xl font-bold">
                Danh sách công việc theo từ khóa:{" "}
                {searchParam.get("tenCongViec")}
            </h1>
            <div className="grid grid-cols-4 gap-5 mt-5">
                {listJob.map((item, index) => {
                    return (
                        <div key={index} className="border p-3">
                            <img
                                src={item.congViec?.hinhAnh}
                                className="w-full"
                                alt=""
                            />
                            <div className="flex items-center space-x-3">
                                <img
                                    src={item.avatar}
                                    className="w-10 h-10 rounded-full"
                                    alt=""
                                />
                                <h4 className="font-bold text-lg">
                                    {item.tenNguoiTao}
                                </h4>
                            </div>
                            <div>
                                <h3>{item.congViec?.tenCongViec}</h3>
                                <p>
                                    <span className="text-yellow-400 space-x-2">
                                        <i className="fa-solid fa-star">
                                            {item.congViec?.saoCongViec}
                                        </i>
                                    </span>
                                    <span className="text-gray-400">
                                        {item.congViec?.danhGia}
                                    </span>
                                </p>
                            </div>
                            {/* lựa chọn yêu thích và giá tiền công việc */}
                            <div className="flex justify-between items-center">
                                <i className="fa-solid fa-heart"></i>
                                <p className="uppercase">
                                    Starting at{" "}
                                    <span>{item.congViec?.giaTien}</span>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ListJobPage;
