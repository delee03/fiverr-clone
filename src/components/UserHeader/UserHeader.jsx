import { useEffect } from "react";
import LogoIcon from "../Icon/LogoIcon";
import { Link } from "react-router-dom";
import { path } from "../../common/path";
import { Avatar } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

import { useSelector } from "react-redux";
import UserIcon from "../Icon/UserIcon";
import LogoutIcon from "../Icon/LogoutIcon";
import FormSearchProduct from "../Form/FormSearchProduct";

import WrapperSuggestJob from "../Wrapper/WrapperSuggestJob";
const items = [
    {
        label: (
            <Link className="flex space-x-2 items-center">
                <UserIcon />
                <span>Thông tin cá nhân</span>
            </Link>
        ),
        key: "0",
    },
    {
        label: (
            <Link className="flex space-x-2 items-center">
                <LogoutIcon />
                <span>Đăng xuất</span>
            </Link>
        ),
        key: "1",
    },
];

const UserHeader = () => {
    // const items = [
    //     {
    //         label: (
    //             <Link className="flex my-2  items-center space-x-2">
    //                 <UserIcon /> <span>Thông tin cá nhân</span>
    //             </Link>
    //         ),
    //         key: "0",
    //     },
    //     {
    //         label: (
    //             <Link className="flex my-2  items-center space-x-2">
    //                 <LogoutIcon /> <span>Đăng xuất</span>
    //             </Link>
    //         ),
    //         key: "0",
    //     },
    // ];

    const { infoUser } = useSelector((state) => state.authSlice); //state này đại diện cho reducers tại config Store của redux từ đó gọi đến authSlice
    //destructoring từ authSlice lấy user bằng cách useSelector
    console.log(infoUser);
    const checkUserLogin = () => {
        //dùng trả về layout
        return infoUser ? (
            <Dropdown menu={{ items }} trigger={["click"]}>
                <Avatar className="cursor-pointer hover:bg-orange-500 duration-300">
                    {infoUser.user.name.slice(0, 1)}
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
                <div className="header_content py-8 flex items-center justify-between">
                    <div className="header_logo flex items-center space-x-5">
                        <Link to={path.homepage}>
                            <LogoIcon />
                        </Link>
                        <WrapperSuggestJob>
                            <FormSearchProduct />
                        </WrapperSuggestJob>
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
