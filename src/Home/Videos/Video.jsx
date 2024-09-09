import React from "react";
import "./Video.scss";

const Video = () => {
  return (
    <div className="container">
      <div className="video_fiverr">
        <video
          className="_19aaquz1j _1rfvtgw1g"
          autoPlay
          controls
          poster="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/ef51b45f79342925d5268e0b2377eae8-1704717764992/thumbnail.png"
          preload="auto"
          crossOrigin="anonymous"
          role="video"
        >
          <source
            role="source"
            src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/e0f330e4c8d6e3bf843a3bd3164fa275-1706087048062/How%20Fiverr%20Works%20EN%20Subs%2016x9"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Video;
