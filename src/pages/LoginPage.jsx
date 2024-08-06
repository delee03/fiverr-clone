import React, { useContext } from "react";
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import signInAnimation from "../assets/animation/loginAnimation.json";
import InputCustom from "../components/Input/InputCustom";
import { Link } from "react-router-dom";
import { path } from "../common/path";
import { useFormik } from "formik";
import * as yup from "yup";
import { authService } from "../service/auth.service";
import { setLocalStorage } from "../utils/util";
import { NotificationContext } from "../App";
const LoginPage = () => {
    const { content, type } = useContext(NotificationContext);
    //in ra để biết nên bóc tách cái j
    //console.log(context);

    //NV1: thực hiện setup formik trong phần login page form
    //NV2: gắn các thuộc tính cần cho các input vào 2 component inputcustom
    //NV3: gắn validation cho 2 inputcustom: emial (required, email) và password (required, min(6), max(10))
    //NV4: thực hiện test phần form xem các onsubmit và validation hoạt động có đúng hay không
    const { handleChange, handleSubmit, values, handleBlur, errors, touched } =
        useFormik({
            initialValues: {
                email: "",
                password: "",
            },
            onSubmit: (values) => {
                console.log(values);
                authService
                    .signIn(values)
                    .then((res) => {
                        console.log(res);
                        //Bước 1: thực hiện lưu trữ ở local Storage để lấy dữ liệu ko bị F5 mất khi lưu vào redux, useContext
                        //thực hiện setLocalStorage
                        setLocalStorage("userInfo", res.data.content);
                    })
                    .catch((err) => {
                        console.log(err + "LỖi khi thực hiện promise");
                        showNotification(err.response.data.message, "error");
                    });
            },
            validationSchema: yup.object({
                email: yup
                    .string()
                    .required("Vui lòng không bỏ trống")
                    .email("Vui lòng nhập đúng định dạng email"),
                password: yup
                    .string()
                    .required("Vui lòng không bỏ trống")
                    .min(6, "Tối thiểu 6 kí tự")
                    .max(10, "Tối đa 10 kí tự"),
            }),
        });
    return (
        <div>
            <div className="container">
                <div className="loginPage_content flex items-center justify-between h-screen">
                    <div className="img w-1/2">
                        <Lottie animationData={signInAnimation} loop={true} />
                    </div>
                    <div className="form w-1/2 ">
                        <form
                            action=""
                            className="space-y-5"
                            onSubmit={handleSubmit}
                        >
                            <h1 className="text-4xl font-medium uppercase text-center">
                                Giao diện đăng nhập
                            </h1>
                            {/* Email */}
                            <InputCustom
                                label={"Email"}
                                name={"email"}
                                onChange={handleChange}
                                //truyền values từ formik
                                value={values.email}
                                error={errors.email}
                                touched={touched.email}
                                onBlur={handleBlur}
                                placehoder={"Vui lòng nhập email"}
                            />
                            {errors.email && touched.email ? (
                                <p className=" text-red-500 mt-0">
                                    {errors.email}
                                </p>
                            ) : null}
                            {/* Handle Blur kiểm tra từng input mà không kiểm tra hết tất cả input khi user chưa nhập xong các input khác */}
                            <InputCustom
                                label={"Email"}
                                name={"password"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.password}
                                touched={touched.password}
                                value={values.password}
                                placehoder={"Vui lòng nhập password"}
                                typeInput="password"
                            />
                            {errors.password && touched.password ? (
                                <p className=" text-red-500 mt-0">
                                    {errors.password}
                                </p>
                            ) : null}
                            <div>
                                <button
                                    type="submit"
                                    className="inline-block px-5 rounded-lg py-2 bg-sky-500 hover:bg-sky-800 w-full text-white"
                                >
                                    Đăng nhập
                                </button>
                                <Link
                                    to={path.signup}
                                    className="text-sky-500 mt-5 block "
                                >
                                    Chưa có tài khoản bấm vào đây
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
