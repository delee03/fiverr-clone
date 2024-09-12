import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import BreadCrumCustom from "../Custom/BreadCrumCustom";
import TabCustom from "../Custom/TabCustom";
import { IconStar, IconStar4, IconQuestion } from "../Icon/IconStorage";
import "./jobDetail.scss";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const JobDetail = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <section>
            <div className="container">
                <div className="job-content flex pb-96">
                    <div className="left-content w-8/12">
                        <BreadCrumCustom title={"Graphic design"} />
                        <h1 className="text-3xl font-semibold ">
                            I will design a modern custom logo for your business
                        </h1>
                        <div className="flex items-center gap-2 mt-6 py-3 border-b-2 border-b-slate-50">
                            <img
                                className="w-14 h-14 rounded-full mt-1"
                                src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/fe1f9fdb33e2b7c5dbb5068ab9f8dfdc-1647327951564/b46a7c7e-8a97-4a23-8912-690eedf984fe.png"
                                alt=""
                            />
                            <div className="ml-2">
                                <h4 className="text-lg font-bold">Sabrina C</h4>
                                <div className="flex items-center mt-2">
                                    <IconStar color="orange" />
                                    <span className="font-semibold text-sm">
                                        4.9 {"(1,999 rating)"}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-2 ml-2">
                                <div className="flex items-center gap-1 bg-orange-400/55 py-1 px-1 rounded">
                                    <h5 className="font-semibold text-xs ">
                                        Top Rated
                                    </h5>
                                    <span className="flex">
                                        <IconStar4 /> <IconStar4 />{" "}
                                        <IconStar4 />
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mt-2">
                                    9 orders in queue
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-3">
                            <h3 className="flex items-center">
                                Among my client <IconQuestion />
                            </h3>
                            <div className="item flex items-center gap-2">
                                <img
                                    className="w-7 h-7"
                                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/ad0e3c99bb7e83b3a17cc1e38ba118e8-1647339906/61b2a410bd2ae66c3f54f5e3.png"
                                    alt=""
                                />
                                <h4>Bitbuu</h4>
                            </div>
                            <div className="item flex items-center gap-2 ml-2">
                                <img
                                    className="w-7 h-7"
                                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/c383e1d72f6e153c81450deca9ac7c0a-1643200542/61a87ec5f3085f4291c4ca3d.png"
                                    alt=""
                                />
                                <h4>Nerdees's</h4>
                            </div>
                            <div className="item flex items-center gap-2 ml-2">
                                <img
                                    className="w-7 h-7"
                                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/b8ee3f0baacec0927ce1a40d4c7ab106-1647340000/61ba7dbbe885416b4620254a.png"
                                    alt=""
                                />
                                <h4>Cheeky Brand</h4>
                            </div>
                            <div className="item flex items-center gap-2 ml-2">
                                <img
                                    className="w-7 h-7"
                                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/25bc0861a8579b6493c51a7e06c29420-1643199859/61a87d8f84d88e25cd784b0d.png"
                                    alt="Fiverr"
                                />
                                <h4>Fiverr</h4>
                            </div>
                        </div>
                        <div className="mt-6 slide-detail">
                            <Swiper
                                style={{
                                    "--swiper-navigation-color": "#fff",
                                    "--swiper-pagination-color": "#fff",
                                }}
                                loop={true}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                                </SwiperSlide>
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="job-description mt-8">
                            <h3 className="text-2xl mb-2 font-bold">
                                About this gig
                            </h3>
                            <p>
                                Ready to Make Your Brand Shine? With our
                                service, you'll get a professional custom logo
                                that will make your business stand out from the
                                rest. We specialize in creating Modern
                                Typography logos. Whether you're seeking a sleek
                                and modern design or a more artistic and
                                expressive approach, our service can bring your
                                vision to life.
                            </p>
                            <div className="py-3">
                                <h4 className="text-xl font-semibold">
                                    Why choose us?
                                </h4>
                                <ul className="list-disc text-gray-600 ml-5">
                                    <li>
                                        Over 9 years of experience and more than
                                        1500 perfect reviews.
                                    </li>
                                    <li>
                                        No stock images used - Every design is
                                        completely original.
                                    </li>
                                </ul>
                            </div>
                            <div className="py-3">
                                <h4 className="text-xl font-semibold">
                                    What You'll Receive:
                                </h4>
                                <ul className="list-disc text-gray-600 ml-5">
                                    <li>
                                        Initial sketches: We'll provide you with
                                        preliminary sketches.
                                    </li>
                                    <li>
                                        Collaborative process: We'll work
                                        closely with you, incorporating your
                                        input and preferences.
                                    </li>
                                    <li>
                                        Final high-quality files: We'll deliver
                                        final files ready for digital and print
                                        use.
                                    </li>
                                </ul>
                            </div>
                            <div className="py-3">
                                <h4 className="text-xl font-semibold">
                                    Still Unsure? Explore our Portfolio!
                                </h4>
                                <p className="text-gray-600 ml-3">
                                    Take a moment to explore our extensive
                                    portfolio: https://flic.kr/s/aHsmWNKBFF
                                </p>
                            </div>
                            <p>Thank you for considering our services!</p>
                        </div>
                    </div>
                    <div className="right-content w-4/12">
                        <TabCustom />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobDetail;
