import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { path } from "../../common/path";

const FormSearchProduct = ({ setOpenDropdown, handleGetValueChildren }) => {
    const navigate = useNavigate();
    const [search, setSearch] = React.useState("");
    useEffect(() => {
        if (setOpenDropdown && handleGetValueChildren) {
            if (!search) {
                setOpenDropdown(false);
            }
            handleGetValueChildren(search);
        }
    }, [search]);
    const handleSubmit = (event) => {
        event.preventDefault();
        //lấy dữ liệu của user từ search value
        //b2 sử dụng navigate để chuyển hướng đến trang danh sách công việc
        //b3 đưa dữ liệu search vào trong url bằng query param khi ck hướngg
        //b4 sử dụng useEffect để lấy dữ liệu từ query param

        navigate(`${path.listjob}?tenCongViec=${search}`);
    };
    const handleChange = (event) => {
        setSearch(event.target.value);
        // console.log("tôi là change");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-between w-[500px] rounded-md border border-black py02 px-4 ">
                <input
                    onChange={handleChange}
                    type="text"
                    className="outline-none"
                    placeholder="Nhập tên công việc"
                />

                <button type="submit" className="p-2 ">
                    <svg
                        className="w-5 h-5 text-gray-800 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="#000"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default FormSearchProduct;
