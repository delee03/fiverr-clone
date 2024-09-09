import React from "react";

const PictureBusiness = () => {
  return (
    <picture>
      <source
        media="(min-width: 1160px)"
        srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d85c8f7113e7f18d6fca144840de5afa-1718619183018/X1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/9b231227d080ea2c154a311109712835-1718619245521/X2.png 2x"
      />
      <source
        media="(min-width: 900px)"
        srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_585,dpr_1.0/v1/attachments/generic_asset/asset/d85c8f7113e7f18d6fca144840de5afa-1718619183018/X1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_585,dpr_2.0/v1/attachments/generic_asset/asset/9b231227d080ea2c154a311109712835-1718619245521/X2.png 2x"
      />
      <source
        media="(min-width: 600px)"
        srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_800,dpr_1.0/v1/attachments/generic_asset/asset/d85c8f7113e7f18d6fca144840de5afa-1718619183018/X1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_800,dpr_2.0/v1/attachments/generic_asset/asset/9b231227d080ea2c154a311109712835-1718619245521/X2.png 2x"
      />
      <img
        alt="Fiverr Pro freelancers"
        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d85c8f7113e7f18d6fca144840de5afa-1718619183018/X1.png"
        loading="lazy"
      />
    </picture>
  );
};

export default PictureBusiness;
