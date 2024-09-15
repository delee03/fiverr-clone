import React from "react";
import "./Guides.scss";

const Guides = () => {
  return (
    <div className="container">
      <div className="guides">
        {/* title  */}
        <div className="guides_title">
          <h2>Guides to help you grow</h2>
          <a href="https://www.fiverr.com/resources/guides">See more</a>
        </div>
        {/* Image  */}
        <div className="guides_all">
          <div className="guides_image">
            <div className="setting_image">
              <div className="image_item">
                <img
                  srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_430,dpr_1.0/v1/attachments/generic_asset/asset/8b1dcc55f5c8582b04aee0b995ae5327-1683590934905/1682363178357-Howtobuildawebsitefromscratch.jpg 430w, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_860,dpr_1.0/v1/attachments/generic_asset/asset/8b1dcc55f5c8582b04aee0b995ae5327-1683590934905/1682363178357-Howtobuildawebsitefromscratch.jpg 860w, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/8b1dcc55f5c8582b04aee0b995ae5327-1683590934905/1682363178357-Howtobuildawebsitefromscratch.jpg 300w, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/8b1dcc55f5c8582b04aee0b995ae5327-1683590934905/1682363178357-Howtobuildawebsitefromscratch.jpg 600w"
                  sizes="(min-width: 900px) 430px, (min-width: 480px) 600px, 430px"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/8b1dcc55f5c8582b04aee0b995ae5327-1683590934905/1682363178357-Howtobuildawebsitefromscratch.jpg"
                  alt="Build a website from scratch"
                  title="Build a website from scratch"
                  loading="lazy"
                />
              </div>
              <div className="image_item">
                <img
                  srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_430,dpr_1.0/v1/attachments/generic_asset/asset/309ac0d5d01de83b832e421b316352a8-1690708285578/05%20-%20Article%20Cover.jpg 430w, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_860,dpr_1.0/v1/attachments/generic_asset/asset/309ac0d5d01de83b832e421b316352a8-1690708285578/05%20-%20Article%20Cover.jpg 860w, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/309ac0d5d01de83b832e421b316352a8-1690708285578/05%20-%20Article%20Cover.jpg 300w, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/309ac0d5d01de83b832e421b316352a8-1690708285578/05%20-%20Article%20Cover.jpg 600w"
                  sizes="(min-width: 900px) 430px, (min-width: 480px) 600px, 430px"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/309ac0d5d01de83b832e421b316352a8-1690708285578/05%20-%20Article%20Cover.jpg"
                  alt="Grow your business with AI"
                  title="Grow your business with AI"
                  loading="lazy"
                />
              </div>
              <div className="image_item">
                <img
                  srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_430,dpr_1.0/v1/attachments/generic_asset/asset/10f680cb84a2f3ef4473ecfdede3a1ba-1593438129320/business%20logo%20design-fiverr%20guide.jpg 430w, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_860,dpr_1.0/v1/attachments/generic_asset/asset/10f680cb84a2f3ef4473ecfdede3a1ba-1593438129320/business%20logo%20design-fiverr%20guide.jpg 860w, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/10f680cb84a2f3ef4473ecfdede3a1ba-1593438129320/business%20logo%20design-fiverr%20guide.jpg 300w, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/10f680cb84a2f3ef4473ecfdede3a1ba-1593438129320/business%20logo%20design-fiverr%20guide.jpg 600w"
                  sizes="(min-width: 900px) 430px, (min-width: 480px) 600px, 430px"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/10f680cb84a2f3ef4473ecfdede3a1ba-1593438129320/business%20logo%20design-fiverr%20guide.jpg"
                  alt="Create a logo for your business"
                  title="Create a logo for your business"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          {/* title footer  */}
          <div className="guides_footer">
            <div className="title_footer">
              <h3>Build a website from scratch</h3>
              <h3>Grow your bussiness with AI</h3>
              <h3>Create a logo for your bussiness</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
