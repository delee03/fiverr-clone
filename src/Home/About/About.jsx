import React, { useState } from "react";
import "./About.scss";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

const AboutFiverr = [
  {
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg",
    videoID: "-fqKaul4RYA",
    title: "Brighid Gannon (DNP, PMHNP-BC), Co-Founder",
    logo: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lavender-logo-x2.3fff9e7.png",
    sub: `"We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."`,
  },
  {
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg",
    videoID:
      "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/plfa6gdjihpdvr10rchl",
    title: "Caitlin Tormey, Chief Commercial Officer",
    logo: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/naadam-logo-x2.a79031d.png",
    sub: `"We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."`,
  },
  {
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg",
    videoID:
      "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw",
    title: "Tim and Dan Joo, Co-Founders",
    logo: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/haerfest-logo-x2.934ab63.png",
    sub: `"When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."`,
  },
  {
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg",
    videoID:
      "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/bsncmkwya3nectkensun",
    title: "Kay Kim, Co-Founder",
    logo: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/rooted-logo-x2.7da3bc9.png",
    sub: `"It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working."`,
  },
];

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  const openModal = (id) => {
    setVideoId(id);
    setIsOpen(true);
  };
  return (
    <div className="container about_section">
      <div className="about">
        <h2>What they're saying about Fiverr</h2>
        <div className="about_carousel">
          <div className="about_list">
            {/* <button className="about_arrow_left left">
              <span>
                <svg
                  width={8}
                  height={15}
                  viewBox="0 0 8 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.2279 0.690653L7.84662 1.30934C7.99306 1.45578 7.99306 1.69322 7.84662 1.83968L2.19978 7.5L7.84662 13.1603C7.99306 13.3067 7.99306 13.5442 7.84662 13.6907L7.2279 14.3094C7.08147 14.4558 6.84403 14.4558 6.69756 14.3094L0.153374 7.76518C0.00693607 7.61875 0.00693607 7.38131 0.153374 7.23484L6.69756 0.690653C6.84403 0.544184 7.08147 0.544184 7.2279 0.690653Z" />
                </svg>
              </span>
            </button>
            <button className="about_arrow_right right">
              <span>
                <svg
                  width={8}
                  height={16}
                  viewBox="0 0 8 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
                </svg>
              </span>
            </button> */}
            <div className="about_track">
              {AboutFiverr.slice(0, 1).map((data, index) => (
                <div className="track_item" key={index}>
                  <div className="track flex justify-between items-center">
                    <div className="about_video w-1/2  h-full">
                      <div
                        className="about_picture cursor-pointer"
                        onClick={() => openModal(data.videoID)}
                      >
                        <img
                          src={data.img}
                          alt="Video thumbnail"
                          className="max-h-80 h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="about_content w-1/2">
                      <h5>
                        {data.title}
                        <span className="about_logo">
                          <img src={data.logo} alt="" />
                        </span>
                      </h5>
                      <blockquote className="about_font">
                        <em>{data.sub}</em>
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default About;
