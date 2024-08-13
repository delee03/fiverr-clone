import React, { useContext } from "react";
import InputCustom from "../../components/Input/InputCustom";
import Lottie from "lottie-react";
import loginAdmin from "../../assets/animation/loginAdmin.json";
import { useFormik } from "formik";
import { authService } from "../../service/auth.service";
import { NotificationContext } from "../../App";
import { getLocalStorage, setLocalStorage } from "../../utils/util";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getInfoUser } from "../../redux/authSlice";

const AdminLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { showNotification } = useContext(NotificationContext);
    const { values, handleSubmit, handleChange } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log(values);
            authService
                .signIn(values)
                .then((res) => {
                    if (res.data.content.user.role === "USER") {
                        showNotification(
                            "Bạn không có quyền truy cập",
                            "error"
                        );
                        let soLanViPham = getLocalStorage("viPham");
                        // console.log(soLanViPham);
                        if (!soLanViPham) {
                            setLocalStorage("viPham", 1);
                        } else {
                            soLanViPham++;
                            if (soLanViPham === 3) {
                                window.location.href = "https://google.com";
                            } else {
                                setLocalStorage("viPham", soLanViPham);
                            }
                        }
                    } else {
                        navigate("/admin");
                        setLocalStorage("userInfo", res.data.content);
                        //thực hiện dispatch lên redux
                        dispatch(getInfoUser(res.data.content));
                    }
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                    showNotification(
                        "Có lỗi xảy ra vui lòng thử lại hoặc báo bộ phận khách hàng",
                        "error"
                    );
                });
        },
    });

    return (
        <div>
            <div className="container">
                <div className="admin_login flex h-screen items-center">
                    <div className="admin_login_img w-1/2">
                        <Lottie animationData={loginAdmin} loop={true} />;
                    </div>
                    <div className="admin_login_form w-1/2 h-full  flex flex-col justify-center gap-10">
                        <h2 className="text-3xl font-bold text-center mb-5 text-sky-400">
                            Đăng nhập dành cho Admin
                        </h2>
                        <form
                            action=""
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <InputCustom
                                label="Email"
                                name="email"
                                onChange={handleChange}
                                value={values.email}
                            />
                            <InputCustom
                                label="Mật khẩu"
                                typeInput="password"
                                onChange={handleChange}
                                name="password"
                                value={values.password}
                            />
                            <div className="mt-10">
                                <button className="py-3 px-5 w-full block bg-black text-white rounded-md  hover:bg-gray-600">
                                    Đăng nhập
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
