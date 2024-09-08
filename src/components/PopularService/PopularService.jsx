import React, { useEffect, useState } from "react";
import { loaiCongViecService } from "../../service/loaiCongViec.service";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
// import required modules
import { Pagination, Scrollbar, EffectFade, Autoplay } from "swiper/modules";
import ListCongViec from "../ListJobsPage/ListCongViec";
import SpinnerCustom from "../Custom/SpinnerCustom";
import { Spin } from "antd";

const PopularService = () => {
    const [dsLoaiCV, setdsLoaiCV] = useState([]);

    const [ChuyenHuong, setChuyenHuong] = useState(false);

    useEffect(() => {
        loaiCongViecService
            .getLoaiCongViec()
            .then((res) => {
                //console.log(res);
                setdsLoaiCV(res.data.content);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const arrHinhAnhLoaiCV = [
        {
            idCV: 1,
            hinhAnh:
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/logo-design.png",
            mauNen: "bg-green-700",
        },
        {
            idCV: 2,
            hinhAnh:
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/social-media-marketing.png",
            mauNen: "bg-orange-500",
        },
        {
            idCV: 3,
            hinhAnh:
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/software-development.png",
            mauNen: "bg-purple-500",
        },
        {
            idCV: 4,
            hinhAnh:
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/video-editing.png",
            mauNen: "bg-sky-500",
        },
        {
            idCV: 5,
            hinhAnh:
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png",
            mauNen: "bg-yellow-500",
        },
        {
            idCV: 1594,
            hinhAnh:
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156474/e-commerce.png",
            mauNen: "bg-green-500",
        },
        {
            idCV: 1595,
            hinhAnh:
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156495/data-science.png",
            mauNen: "bg-red-500",
        },
        {
            idCV: 1596,
            hinhAnh:
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156481/product-photography.png",
            mauNen: "bg-violet-500",
        },
        {
            idCV: 1597,
            hinhAnh:
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png",
            mauNen: "bg-yellow-500",
        },
    ];
    function checkIdLoai(id) {
        const foundItem = arrHinhAnhLoaiCV.find((item) => item.idCV === id);
        return foundItem || null;
    }

    return (
        <div>
            <div className="container">
                <h2 className="title-heading">Popular services</h2>
                {/* <SpinnerCustom /> */}
                <Swiper
                    loop
                    slidesPerView={1}
                    spaceBetween={10}
                    scrollbar={{ draggable: true }}
                    modules={[Pagination, Scrollbar, EffectFade, Autoplay]} // Add Autoplay module
                    className="mySwiper mt-10"
                    autoplay={{ delay: 1500 }} // Set autoplay delay
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                    breakpoints={{
                        368: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 48,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {dsLoaiCV.map((item, index) => {
                        const { hinhAnh, mauNen } = checkIdLoai(item.id) || {};

                        return (
                            <SwiperSlide
                                key={index}
                                className={` item pt-4 px-2 pb-2 min-h-64 w-56 rounded-2xl ${mauNen}`}
                            >
                                <Link
                                    onClick={() => {
                                        setChuyenHuong(true);
                                        setTimeout(() => {
                                            window.location.href = "/list-cv";
                                        }, 2000);
                                    }}
                                >
                                    <h3 className="text-white text-lg font-semibold py-8  ms-2">
                                        {item.tenLoaiCongViec}
                                    </h3>
                                    <img
                                        src={hinhAnh || null}
                                        alt=""
                                        className="w-full h-full rounded-xl object-cover"
                                    />
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                    {/* {dsLoaiCV.map((item, index) => {
                        const { hinhAnh, mauNen } = checkIdLoai(item.id) || {};
                        return (
                            <SwiperSlide
                                key={index}
                                className={` item pt-4 px-2 pb-2 min-h-64 w-56 rounded-2xl ${mauNen}`}
                            >
                                <Link to="/list-cv">
                                    <h3 className="text-white text-lg font-semibold py-8  ms-2">
                                        {item.tenLoaiCongViec}
                                    </h3>
                                    <img
                                        src={hinhAnh || null}
                                        alt=""
                                        className="w-full rounded-xl"
                                    />
                                </Link>
                            </SwiperSlide>
                        );
                    })} */}
                </Swiper>
                {ChuyenHuong && <SpinnerCustom />}
            </div>
        </div>
    );
};

export default PopularService;
