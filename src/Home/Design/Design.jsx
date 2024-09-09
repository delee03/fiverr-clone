import React from "react";
import "./Design.scss";

const Design = () => {
  return (
    <div className="container">
      <div className="design">
        <h2 className="h2-title">Made on Fiverr</h2>
        <div className="design_setting">
          <div className="design_setting_top">
            <div className="design_list">
              <div className="design_item">
                <div>
                  <div className="setting_item">
                    <a href="">
                      <img
                        src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/8f2ae6141db7fb3cdd6f8263c055bba7-1723797879/Plan%20floor%202%20_%20View%2001.jpg"
                        alt=""
                      />
                    </a>
                    <div className="design_picture"></div>
                    <div className="design_overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="design_setting_bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Design;
