import React, { useEffect, useState } from "react";
import { loaiCongViecService } from "../../service/loaiCongViec.service";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";

const PopularService = () => {
    const [dsLoaiCV, setdsLoaiCV] = useState([]);
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
    ];
    function checkIdLoai(id) {
        const foundItem = arrHinhAnhLoaiCV.find((item) => item.idCV === id);
        if (foundItem) {
            //  console.log(foundItem);
            const { hinhAnh, mauNen } = foundItem;
            // Use hinhAnh and mauNen here
            return { hinhAnh, mauNen };
        }
    }

    return (
        <div>
            <div className="container">
                <h2 className="title-heading">Popular services</h2>

                <div className=" mt-10  grid grid-flow-col auto-cols-max gap-10  ">
                    {dsLoaiCV.map((item, index) => {
                        const { hinhAnh, mauNen } = checkIdLoai(item.id);
                        return (
                            <div
                                key={index}
                                className={` item pt-4 px-2 pb-2 min-h-64 w-56 rounded-2xl ${mauNen}`}
                            >
                                <h3 className="text-white text-lg font-semibold py-8  ms-2">
                                    {item.tenLoaiCongViec}
                                </h3>
                                <img
                                    src={hinhAnh || null}
                                    alt=""
                                    className="w-full rounded-xl"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PopularService;
