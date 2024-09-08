import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function TechCarousel() {
    return (
        <>
            <Swiper
                slidesPerView={5.5}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper mb-8 -mt-6 pb-10 pt-14 border-b-1 border-gray-200 "
                style={{ borderBottom: "1px solid #ddd" }}
            >
                <SwiperSlide>
                    <Link to={"/"}>
                        <div className="flex items-center justify-center py-3  rounded-full border border-slate-300 gap-3 max-h-20 w-full max-w-60">
                            <img
                                src="wordpress.svg"
                                alt="Wordpress"
                                className="w-12 h-12 object-cover"
                            />
                            <h4 className="font-semibold text-md">WordPress</h4>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={"/"}>
                        <div className="flex items-center justify-center py-3  rounded-full border border-slate-300 gap-3 max-h-20 w-full max-w-60">
                            <img
                                src="customwebsite.svg"
                                alt="Wordpress"
                                className="w-12 h-12 object-cover"
                            />
                            <h4 className="font-semibold text-md">
                                Custom Website
                            </h4>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={"/"}>
                        <div className="flex items-center justify-center py-3  rounded-full border border-slate-300 gap-3 max-h-20 w-full max-w-60">
                            <img
                                src="shopify.svg"
                                alt="Wordpress"
                                className="w-12 h-12 object-cover"
                            />
                            <h4 className="font-semibold text-md">Shopify</h4>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={"/"}>
                        <div className="flex items-center justify-center py-3  rounded-full border border-slate-300 gap-3 max-h-20 w-full max-w-60">
                            <img
                                src="wix.svg"
                                alt="Wordpress"
                                className="w-12 h-12 object-cover"
                            />
                            <h4 className="font-semibold text-md">
                                Wix Studio
                            </h4>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={"/"}>
                        <div className="flex items-center justify-center py-3  rounded-full border border-slate-300 gap-3 max-h-20 w-full max-w-60">
                            <img
                                src="webflow.svg"
                                alt="Wordpress"
                                className="w-12 h-12 object-cover"
                            />
                            <h4 className="font-semibold text-md">WebFlow</h4>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={"/"}>
                        <div className="flex items-center justify-center py-3  rounded-full border border-slate-300 gap-3 max-h-20 w-full max-w-60">
                            <img
                                src="woocomerce.svg"
                                alt="Wordpress"
                                className="w-12 h-12 object-cover"
                            />
                            <h4 className="font-semibold text-md">
                                WooCommerce
                            </h4>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={"/"}>
                        <div className="flex items-center justify-center py-3  rounded-full border border-slate-300 gap-3 max-h-20 w-full max-w-60">
                            <img
                                src="squarespace.svg"
                                alt="Wordpress"
                                className="w-12 h-12 object-cover"
                            />
                            <h4 className="font-semibold text-md">
                                SquareSpace
                            </h4>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={"/"}>
                        <div className="flex items-center justify-center py-3  rounded-full border border-slate-300 gap-3 max-h-20 w-full max-w-60">
                            <img
                                src="otherbuilder.svg"
                                alt="Wordpress"
                                className="w-12 h-12 object-cover"
                            />
                            <h4 className="font-semibold text-md">
                                Other Builders
                            </h4>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={"/"}>
                        <div className="flex items-center justify-center py-3  rounded-full border border-slate-300 gap-3 max-h-20 w-full max-w-60">
                            <img
                                src="clickfunnel.svg"
                                alt="Wordpress"
                                className="w-12 h-12 object-cover"
                            />
                            <h4 className="font-semibold text-md">
                                Click Funnels
                            </h4>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={"/"}>
                        <div className="flex items-center justify-center py-3  rounded-full border border-slate-300 gap-3 max-h-20 w-full max-w-60">
                            <img
                                src="godaddy.svg"
                                alt="Wordpress"
                                className="w-12 h-12 object-cover"
                            />
                            <h4 className="font-semibold text-md">Go Daddy</h4>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
