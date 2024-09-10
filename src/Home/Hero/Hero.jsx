import React from "react";
import "./Hero.scss";
import "./ResHero.scss";
import IconSearch from "../../components/Icon/IconSearch";
import ImageFiver1 from "../../assets/images/image_fiverr1.svg";
import ImageFiver2 from "../../assets/images/image_fiverr2.svg";
import ImageFiver3 from "../../assets/images/image_fiverr3.svg";
import ImageFiver4 from "../../assets/images/image_fiverr4.svg";
import ImageFiver5 from "../../assets/images/image_fiverr5.svg";
import ImageFiver6 from "../../assets/images/image_fiverr6.svg";

const imgHero = [
  {
    id: 1,
    image: ImageFiver1,
  },
  {
    id: 2,
    image: ImageFiver2,
  },
  {
    id: 3,
    image: ImageFiver3,
  },
  {
    id: 4,
    image: ImageFiver4,
  },
  {
    id: 5,
    image: ImageFiver5,
  },
  {
    id: 6,
    image: ImageFiver6,
  },
];

const Hero = () => {
  return (
    <div className="hero_section pb-5">
      <div className="container">
        <div className="img_hero">
          <div className="title_hero">
            <h1>
              Find the right
              <em className="title_freelancer"> freelancer </em> <br />
              service, right away
            </h1>
            <div className="search_hero">
              <form className="search_form" action="">
                <input
                  type="search"
                  className="input_hero"
                  placeholder="Search for any service..."
                />
                <button className="button_hero">
                  <div className="button_icon">
                    <IconSearch className="" />
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="trust_hero">
            <span>Trusted by:</span>
            <ul className="trust_image">
              {imgHero.map((data, index) => (
                <li>
                  <img src={data.image} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
