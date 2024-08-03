import React from "react";
import LogoIcon from "../Icon/LogoIcon";
import { Link } from "react-router-dom";
import { path } from "../../common/path";
const UserHeader = () => {
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
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default UserHeader;

//coi lại useFormik và Yup
//query param trong react => URL
