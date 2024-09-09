import React from "react";
import "./Market.scss";
import LogoMaker from "../Market/LogoMaker";

const Market = () => {
  return (
    <div className="market_section">
      <div className="container">
        <div className="market">
          <div className="market_list">
            <div className="market_left">
              <small>
                <i>
                  <LogoMaker />
                </i>
              </small>
              <h2>
                Make an incredible <br />
                logo <em>in seconds</em>
              </h2>
              <p>Pre-designed by top talent. Just add your touch.</p>
              <a href="https://www.fiverr.com/logo-maker?source=LOHP_banner">
                Try Fiverr Logo Maker
              </a>
            </div>
            <div className="market_right">
              <picture>
                <source
                  media="(min-width: 900px)"
                  srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_460,dpr_1.0/v1/attachments/generic_asset/asset/55292bd34319d97ef4e9fd48d9f8758d-1704795769965/logo-maker-lohp.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_460,dpr_2.0/v1/attachments/generic_asset/asset/55292bd34319d97ef4e9fd48d9f8758d-1704795769965/logo-maker-lohp.png 2x"
                />
                <source
                  media="(min-width: 600px)"
                  srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_346,dpr_1.0/v1/attachments/generic_asset/asset/55292bd34319d97ef4e9fd48d9f8758d-1704795769965/logo-maker-lohp.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_346,dpr_2.0/v1/attachments/generic_asset/asset/55292bd34319d97ef4e9fd48d9f8758d-1704795769965/logo-maker-lohp.png 2x"
                />
                <source
                  media="(min-width: 361px)"
                  srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_312,dpr_1.0/v1/attachments/generic_asset/asset/55292bd34319d97ef4e9fd48d9f8758d-1704795769965/logo-maker-lohp.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_312,dpr_2.0/v1/attachments/generic_asset/asset/55292bd34319d97ef4e9fd48d9f8758d-1704795769965/logo-maker-lohp.png 2x"
                />
                <source
                  media="(max-width: 360px)"
                  srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_244,dpr_1.0/v1/attachments/generic_asset/asset/55292bd34319d97ef4e9fd48d9f8758d-1704795769965/logo-maker-lohp.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_244,dpr_2.0/v1/attachments/generic_asset/asset/55292bd34319d97ef4e9fd48d9f8758d-1704795769965/logo-maker-lohp.png 2x"
                />
                <img
                  alt="fiverr logo maker"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_460,dpr_1.0/v1/attachments/generic_asset/asset/55292bd34319d97ef4e9fd48d9f8758d-1704795769965/logo-maker-lohp.png"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
