import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";

import Categories_fiverr1 from "../../assets/images/Categories_fiverr1.svg";
import Categories_fiverr2 from "../../assets/images/Categories_fiverr2.svg";
import Categories_fiverr3 from "../../assets/images/Categories_fiverr3.svg";
import Categories_fiverr4 from "../../assets/images/Categories_fiverr4.svg";
import Categories_fiverr5 from "../../assets/images/Categories_fiverr5.svg";
import Categories_fiverr6 from "../../assets/images/Categories_fiverr6.svg";
import Categories_fiverr7 from "../../assets/images/Categories_fiverr7.svg";
import Categories_fiverr8 from "../../assets/images/Categories_fiverr8.svg";
import Categories_fiverr9 from "../../assets/images/Categories_fiverr9.svg";

const Categories_Img = [
    {
        href: "https://www.fiverr.com/categories/programming-tech?source=hplo_cat_sec_TOP&pos=1",
        title: "Programing & Tech",
        image: Categories_fiverr1,
    },
    {
        href: "https://www.fiverr.com/categories/graphics-design?source=hplo_cat_sec_TOP&pos=2",
        title: "Graphics & Design",
        image: Categories_fiverr2,
    },
    {
        href: "https://www.fiverr.com/categories/online-marketing?source=hplo_cat_sec_TOP&pos=3",
        title: "Digital & Marketing",
        image: Categories_fiverr3,
    },
    {
        href: "https://www.fiverr.com/categories/writing-translation?source=hplo_cat_sec_TOP&pos=4",
        title: "Writing & Translation",
        image: Categories_fiverr4,
    },
    {
        href: "https://www.fiverr.com/categories/video-animation?source=hplo_cat_sec_TOP&pos=5",
        title: "Video & Animation",
        image: Categories_fiverr5,
    },
    {
        href: "https://www.fiverr.com/categories/ai-services?source=hplo_cat_sec_TOP&pos=6",
        title: "AI Services",
        image: Categories_fiverr6,
    },
    {
        href: "https://www.fiverr.com/categories/music-audio?source=hplo_cat_sec_TOP&pos=7",
        title: "Music & Audio",
        image: Categories_fiverr7,
    },
    {
        href: "https://www.fiverr.com/categories/business?source=hplo_cat_sec_TOP&pos=8",
        title: "Bussiness",
        image: Categories_fiverr8,
    },
    {
        href: "https://www.fiverr.com/categories/consulting-services?source=hplo_cat_sec_TOP&pos=9",
        title: "Consulting",
        image: Categories_fiverr9,
    },
];

const Categories = () => {
    return (
        <div className="categories_section">
            <div className="container">
                <div className="categories">
                    <div className="categories_skill">
                        {Categories_Img.map((data, index) => (
                            <div className="categories_list">
                                <Link to="/list-cv">
                                    <div>
                                        <img src={data.image} alt="" />
                                    </div>
                                    <p>{data.title}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
