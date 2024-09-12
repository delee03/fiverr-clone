import React, { useEffect, useState } from "react";

import OptionsCV from "../Custom/OptionsCV";
import { getAllCVApi, getCVTheoCTLoaiApi } from "../../redux/congViecSlice";
import { useDispatch, useSelector } from "react-redux";
import { Select, Space } from "antd";
import BreadCrumCustom from "../Custom/BreadCrumCustom";
import TechCarousel from "../Custom/TechCarousel";
import NavMenuLoaiCV from "../NavBar/NavMenuLoaiCV";
import SpinnerCustom from "../Custom/SpinnerCustom";

const ListCongViec = () => {
    // const [tenLoaiCV, setTenLoaiCV] = useState("");
    const valueAllCongViec = useSelector((state) => state.congViecSlice);
    const valueCongViecTheoChiTietLoai = useSelector(
        (state) => state.congViecSlice
    );
    //const [dataChange, setDataChange] = useState(valueAllCongViec.allCongViec);
    // console.log(valueCongViecTheoChiTietLoai.layCongViecTheoChiTietLoai);
    // console.log(valueAllCongViec.allCongViec);
    const [Loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const [CheckHover, setCheckHover] = useState(null);

    const handleCheckHoverDropdown = (IDChiTietLoai) => {
        setCheckHover(IDChiTietLoai);
        dispatch(getCVTheoCTLoaiApi(IDChiTietLoai));
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Đặt loading trước khi gọi API
            dispatch(getAllCVApi());

            await new Promise((resolve) => setTimeout(resolve, 1500)); //đợi cho api trả về 1.5s
            setLoading(false); //get api honaf thành
        };
        // if (!CheckHover) {
        //     setLoading(false);
        // } else {
        //     setLoading(true);
        // }
        fetchData();
    }, [dispatch]);

    // let tenChuDe = valueCongViecTheoChiTietLoai.layCongViecTheoChiTietLoai.map(
    //     (item) => {
    //         return item.congViec.tenLoaiCongViec;
    //     }
    // );

    // if (tenChuDe) {
    //     console.log(tenChuDe);
    // }
    let tenChuDe = valueCongViecTheoChiTietLoai.layCongViecTheoChiTietLoai[0]
        ?.tenChiTietLoai
        ? valueCongViecTheoChiTietLoai?.layCongViecTheoChiTietLoai[0]
              ?.tenChiTietLoai
        : "All Job Fiverr";

    //viest 1 hàm check state khi hover dropdown thay đổi thì truyền nó lên LIstCongViec từ NavMenuCV
    //sau đó nếu state thay đổi đó gửi ID mã chi tiết công việc đó lên ListCongViec dispatch lấy dữ liệu từ layCongViecTheoChiTietLoai service về render ra là xong

    return (
        <section>
            {Loading && <SpinnerCustom title={"Đang lấy dữ liệu"} />}
            <div className="container">
                <NavMenuLoaiCV handleCheck={handleCheckHoverDropdown} />
                <BreadCrumCustom title={tenChuDe} breadcrum={tenChuDe} />
                <TechCarousel />
                <OptionsCV />
                <div className="flex justify-between pb-1 mt-8 items-center">
                    <span className="ml-2 text-gray-500">
                        {valueCongViecTheoChiTietLoai.layCongViecTheoChiTietLoai
                            .length > 1
                            ? valueCongViecTheoChiTietLoai
                                  .layCongViecTheoChiTietLoai.length
                            : valueAllCongViec.allCongViec.length}
                        + Results
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
                    {CheckHover == null
                        ? [...valueAllCongViec.allCongViec]
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
                                                  From
                                                  <span>
                                                      $
                                                      {item?.giaTien.toLocaleString()}
                                                  </span>
                                              </p>
                                          </div>
                                      </div>
                                  );
                              })
                        : valueCongViecTheoChiTietLoai.layCongViecTheoChiTietLoai.map(
                              (item, index) => {
                                  //   setTenChuDe(item.tenChiTietLoai);

                                  return (
                                      <div
                                          key={index}
                                          className="border p-3 rounded-xl"
                                      >
                                          {/* <h2 className="text-3xl font-bold py-4">
                                              Danh sách công việc theo:
                                              {item.tenChiTietLoai}
                                          </h2> */}
                                          <img
                                              src={item?.congViec.hinhAnh}
                                              className="w-full rounded-lg"
                                              alt=""
                                          />
                                          <div className="flex justify-between items-center">
                                              <div className="flex items-center space-x-3 mt-3">
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
                                                  <span className="text-yellow-400 ">
                                                      <i className="fa-solid fa-star">
                                                          {
                                                              item?.congViec
                                                                  .saoCongViec
                                                          }
                                                      </i>
                                                  </span>
                                                  <span className="text-gray-800 font-semibold ml-2">
                                                      {item?.congViec.danhGia}
                                                  </span>
                                              </div>
                                          </div>
                                          <div>
                                              <h3 className="font-semibold py-2 min-h-18">
                                                  {item?.congViec.tenCongViec}
                                              </h3>
                                          </div>

                                          <div className="mt-2">
                                              <p className="desc-job text-xs">
                                                  {item?.congViec.moTaNgan}
                                              </p>
                                          </div>
                                          {/* lựa chọn yêu thích và giá tiền công việc */}
                                          <div className="flex justify-between items-center mt-3">
                                              <i className="fa-solid fa-heart"></i>
                                              <p className="uppercase font-semibold">
                                                  From
                                                  <span>
                                                      $
                                                      {item?.congViec.giaTien.toLocaleString()}
                                                  </span>
                                              </p>
                                          </div>
                                      </div>
                                  );
                              }
                          )}
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
