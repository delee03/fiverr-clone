import React from "react";
import "./Prosper.scss";
import ProsperImage1 from "../../assets/images/Prosper_fiverr1.svg";
import ProsperImage2 from "../../assets/images/Prosper_fiverr2.svg";
import ProsperImage3 from "../../assets/images/Prosper_fiverr3.svg";
import ProsperImage4 from "../../assets/images/Prosper_fiverr4.svg";

const ProsperItem = [
  {
    id: 1,
    img: ProsperImage1,
    title: "Over 700 categories",
    sub: "Get results from skilled freelancers from all over the world, for every task, at any price point.",
  },
  {
    id: 2,
    img: ProsperImage2,
    title: "Clear, transparent pricing",
    sub: "Pay per project or by the hour (Pro). Payments only get released when you approve.",
  },
  {
    id: 3,
    img: ProsperImage3,
    title: "Quality work done faster",
    sub: "Filter to find the right freelancers quickly and get great work delivered in no time, every time.",
  },
  {
    id: 4,
    img: ProsperImage4,
    title: "24/7 award-winning support",
    sub: "Chat with our team to get your questions answered or resolve any issues with your orders.",
  },
];

const Prosper = () => {
  return (
    <div className="prosper_section">
      <div className="container">
        <div className="prosper">
          <h2>
            A Whole world of freelancer <br /> talent at your fingertips
          </h2>
          <ul className="prosper_search">
            {ProsperItem.map((data, index) => (
              <li className="prosper_list">
                <div>
                  <div>
                    <img src={data.img} alt="" />
                  </div>
                  <h3>{data.title}</h3>
                </div>
                <p>{data.sub}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Prosper;
