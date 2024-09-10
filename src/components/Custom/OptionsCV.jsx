import React, { useState } from "react";
import PopularService from "../PopularService/PopularService";
import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import { FloatButton, Switch, Tooltip } from "antd";

const OptionsCV = () => {
    const [open, setOpen] = useState(true);
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex justify-between gap-5">
                    <select
                        id=""
                        className=" border w-52 border-gray-300 font-semibold text-gray-900 text-sm rounded-lg hover:bg-gray-200 block  py-2.5 pl-4 pr-5 "
                    >
                        <option selected>Service options</option>
                        <option value="US">Service</option>
                    </select>
                    <select
                        id=""
                        className=" border border-gray-300 font-semibold text-gray-900 text-sm rounded-lg hover:bg-gray-200 block w-full p-2.5  "
                    >
                        <option selected>Seller detail</option>
                        <option value="US">Service</option>
                    </select>
                    <select
                        id=""
                        className=" border border-gray-300 font-semibold  text-gray-900 text-sm rounded-lg hover:bg-gray-200 block w-full p-2.5 "
                    >
                        <option selected>Budget</option>
                        <option value="US">Service</option>
                    </select>
                    <select
                        id=""
                        className=" w-52 border border-gray-300 font-semibold text-gray-900 text-sm rounded-lg hover:bg-gray-200 block  p-2.5 "
                    >
                        <option selected>Delivery time</option>
                        <option value="US">Service</option>
                    </select>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <Switch
                            onChange={setOpen}
                            checked={open}
                            style={{
                                margin: 16,
                            }}
                        />
                        <span>Pro Services</span>
                    </div>
                    <Tooltip title="Gặp tư vấn viên" placement="left">
                        <FloatButton.Group
                            open={open}
                            trigger="click"
                            style={{
                                insetInlineEnd: 24,
                            }}
                            icon={<CustomerServiceOutlined />}
                        >
                            <FloatButton />
                            <FloatButton />
                            <FloatButton icon={<CommentOutlined />} />
                        </FloatButton.Group>
                    </Tooltip>
                </div>
            </div>
        </>
    );
};

export default OptionsCV;
