import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="bg-red-500">
            <Link to={"/"}>Bấm vào để quay về trang chủ</Link>
        </div>
    );
};

export default PageNotFound;
