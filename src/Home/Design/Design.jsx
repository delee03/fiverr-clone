import React from "react";
import "./Design.scss";

const Design = () => {
  return (
    <div className="container">
      <div className="design">
        <h2 className="h2-title">Made on Fiverr</h2>
        <div className="design_setting">
          {/* top  */}
          <div className="design_setting_top">
            {/* list  */}
            <div className="design_list">
              {/* item  */}
              <div className="design_item">
                {/* other  */}
                <div>
                  {/* setting item  */}
                  <div className="setting_item">
                    {/* a (img) , picture,overlay  */}
                    <a href="">
                      {/* image  */}
                      <img
                        src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/8c21ee83ba7c66904ac9b4589e21bc12-1723463172/hammer%20final%204.jpg"
                        alt=""
                      />
                    </a>
                    <div className="design_picture">
                      {/* setting picture  */}
                      <div className="setting_picture">
                        <div className="setting_picture_left">
                          Featured in:
                          <span className="picture_title_1">Illustration</span>
                          <br />
                          by:
                          <a className="picture_title_2" href="whiteghul"></a>
                        </div>
                        <div className="setting_picture_right">
                          <span className="picture_button">
                            <button className="button_picture">
                              <span>
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentFill"
                                >
                                  <circle cx={2} cy={2} r={2} />
                                  <circle cx={8} cy={2} r={2} />
                                  <circle cx={14} cy={2} r={2} />
                                </svg>
                              </span>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="design_overlay">
                      <div>
                        {/* full heart  */}
                        <div>
                          {/* setting heart  */}
                          <div className="full_heart">
                            <span>
                              <button>
                                <span>
                                  <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14.325 2.00937C12.5188 0.490623 9.72813 0.718748 8 2.47812C6.27188 0.718748 3.48125 0.487498 1.675 2.00937C-0.674996 3.9875 -0.331246 7.2125 1.34375 8.92187L6.825 14.5062C7.1375 14.825 7.55625 15.0031 8 15.0031C8.44688 15.0031 8.8625 14.8281 9.175 14.5094L14.6563 8.925C16.3281 7.21562 16.6781 3.99062 14.325 2.00937ZM13.5875 7.86875L8.10625 13.4531C8.03125 13.5281 7.96875 13.5281 7.89375 13.4531L2.4125 7.86875C1.27188 6.70625 1.04063 4.50625 2.64063 3.15937C3.85625 2.1375 5.73125 2.29062 6.90625 3.4875L8 4.60312L9.09375 3.4875C10.275 2.28437 12.15 2.1375 13.3594 3.15625C14.9563 4.50312 14.7188 6.71562 13.5875 7.86875Z" />
                                  </svg>
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* bottom  */}
          <div className="design_setting_bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Design;
