import React from "react";
import "./Card.scss";
// import cards from "../Card/dataCard";

const cards = [
  {
    id: 1,
    href: "https://www.fiverr.com/categories/programming-tech/website-development?source=hplo_subcat_first_step&pos=1",
    title: "Website Development",
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png",
    bgColor: "#00732e",
  },
  {
    id: 2,
    href: "https://www.fiverr.com/categories/graphics-design/creative-logo-design?source=hplo_subcat_first_step&pos=2",
    title: "Logo Design",
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/logo-design.png",
    bgColor: "#ff7640",
  },
  {
    id: 3,
    href: "https://www.fiverr.com/categories/online-marketing/seo-services?source=hplo_subcat_first_step&pos=3",
    title: "SEO",
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png",
    bgColor: "#003912",
  },
  {
    id: 4,
    href: "https://www.fiverr.com/categories/graphics-design/architectural-design-services?source=hplo_subcat_first_step&pos=4",
    title: "Architecture & Interior Design",
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156473/architecture-design.png",
    bgColor: "#4d1727",
  },
  {
    id: 5,
    href: "https://www.fiverr.com/categories/online-marketing/social-marketing?source=hplo_subcat_first_step&pos=5",
    title: "Social Media Marketing",
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/social-media-marketing.png",
    bgColor: "#687200",
  },
  {
    id: 6,
    href: "",
    title: "Voice Over",
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png",
    bgColor: "#421300",
  },
  {
    id: 7,
    href: "https://www.fiverr.com/categories/programming-tech/software-development?source=hplo_subcat_first_step&pos=7",
    title: "Sortware Develoment",
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/software-development.png",
    bgColor: "#254200",
  },
  {
    id: 8,
    href: "https://www.fiverr.com/categories/data/data-science?source=hplo_subcat_first_step&pos=8",
    title: "Data Science & ML",
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156495/data-science.png",
    bgColor: "#8f2900",
  },
  {
    id: 9,
    href: "https://www.fiverr.com/categories/photography/product-photographers?source=hplo_subcat_first_step&pos=9",
    title: "Product Photography",
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156481/product-photography.png",
    bgColor: "#687200",
  },
  {
    id: 10,
    href: "https://www.fiverr.com/categories/online-marketing/e-commerce-marketing?source=hplo_subcat_first_step&pos=10",
    title: "E-Commerce",
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156474/e-commerce.png",
    bgColor: "#00732e",
  },
  {
    id: 11,
    href: "https://www.fiverr.com/categories/video-animation/video-editing?source=hplo_subcat_first_step&pos=11",
    title: "Video Editing",
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/video-editing.png",
    bgColor: "#be5272",
  },
];
const Card = () => {
  return (
    <div className="card_section">
      <div className="container">
        <div className="card">
          <h2>Popular Services</h2>
          <div className="card_skill">
            <div className="card_list">
              <button className="arrow-btn">
                <span>
                  <svg
                    width="8"
                    height="15"
                    viewBox="0 0 8 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.2279 0.690653L7.84662 1.30934C7.99306 1.45578 7.99306 1.69322 7.84662 1.83968L2.19978 7.5L7.84662 13.1603C7.99306 13.3067 7.99306 13.5442 7.84662 13.6907L7.2279 14.3094C7.08147 14.4558 6.84403 14.4558 6.69756 14.3094L0.153374 7.76518C0.00693607 7.61875 0.00693607 7.38131 0.153374 7.23484L6.69756 0.690653C6.84403 0.544184 7.08147 0.544184 7.2279 0.690653Z"></path>
                  </svg>
                </span>
              </button>
              <button className="arrow-btn">
                <span>
                  <svg
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path>
                  </svg>
                </span>
              </button>
              <div className="card_track">
                {cards.map((data, index) => (
                  <div className="card_item">
                    <div
                      className="card_it"
                      style={{ backgroundColor: data.bgColor }}
                    >
                      <a href={data.href}>
                        <h3>{data.title}</h3>
                        <picture>
                          <img src={data.img} alt="" />
                        </picture>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
