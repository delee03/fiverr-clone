import React from "react";
import LogoIcon from "../Icon/LogoIcon";
import { Link } from "react-router-dom";
import { path } from "../../common/path";
import { Avatar } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

import { useSelector } from "react-redux";

const UserHeader = () => {
    const items = [
        {
            label: <a href="https://www.antgroup.com">1st menu item</a>,
            key: "0",
        },
        {
            label: <a href="https://www.aliyun.com">2nd menu item</a>,
            key: "1",
        },
        {
            type: "divider",
        },
    ];

    const { infoUser } = useSelector((state) => state.authSlice); //state này đại diện cho reducers tại config Store của redux từ đó gọi đến authSlice
    //destructoring từ authSlice lấy infoUser bằng cách useSelector
    console.log(infoUser);
    const checkUserLogin = () => {
        //dùng trả về layout
        return infoUser ? (
            <Dropdown menu={{ items }} trigger={["click"]}>
                <Avatar className="cursor-pointer hover:bg-orange-500 duration-300">
                    {infoUser.user.name[0]}
                </Avatar>
            </Dropdown>
        ) : (
            <>
                <Link
                    to={path.signin}
                    className="py-2 px-4 rounded-md hover:bg-gray-200 duration-300"
                >
                    Sign in
                </Link>
                <Link
                    to={path.signup}
                    className="py-2 px-4 rounded-md text-green-500 border-green-500 hover:bg-green-500 hover:text-white duration-300"
                >
                    Sign up
                </Link>
            </>
        );
    };
    return (
        <header>
            <div className="container">
                <div className="header_content flex items-center justify-between">
                    <div className="header_logo">
                        <Link to={path.homepage}>
                            <LogoIcon />
                        </Link>
                    </div>
                    <nav className="header_navigate space-x-5">
                        {checkUserLogin()}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default UserHeader;

//coi lại useFormik và Yup
//query param trong react => URL
