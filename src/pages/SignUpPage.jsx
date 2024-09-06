import React, { useContext, useState } from "react";
import InputCustom from "../components/Custom/InputCustom";
import ButtonCustom from "../components/Custom/ButtonCustom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import { DatePicker } from "antd";
import { useFormik } from "formik";
import Password from "antd/es/input/Password";
import dayjs from "dayjs";
import * as yup from "yup";
import { NotificationContext } from "../App";
import { authService } from "../service/auth.service";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLocalStorage } from "../utils/util";
import { path } from "../common/path";
import { getInfoUser } from "../redux/authSlice";

const SignUpPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { showNotification } = useContext(NotificationContext);
    //in ra để biết nên bóc tách cái j
    //console.log(context);
    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            phone: "",
            password: yup.boolean,
            gender: "",
            birthday: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Không được bỏ trống họ tên"),
            email: yup
                .string()
                .email("Email không hợp lệ")
                .required("Không được bỏ trống email"),
            phone: yup
                .string()
                .matches(
                    /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-4|6-9])\d{7}$/,
                    "Vui lòng nhập đúng sdt Việt Nam"
                )
                .required("Không được bỏ trống!"),
            password: yup.string().required("không được bỏ trống password"),
            gender: yup.boolean().required("Vui lòng chọn giới tính"),
            birthday: yup.string().required("Vui lòng chọn ngày sinh"),
        }),

        onSubmit: (values) => {
            // console.log(values);
            authService
                .signUp(values)
                .then((res) => {
                    //console.log(res.data.content);
                    setLocalStorage("userInfo", res.data.content);
                    showNotification(
                        "Đăng kí thành công, đang chuyển hướng về trang chủ",
                        "success",
                        3000
                    );
                    dispatch(getInfoUser(res.data.content));
                    setTimeout(() => {
                        navigate(path.homepage);
                    }, 2000);
                    resetForm();
                })
                .catch((errors) => {
                    console.log(errors);
                    showNotification(
                        "Đăng kí thất bại, vui lòng kiểm tra lại",
                        "error",
                        3000
                    );
                });
        },
    });

    const {
        values,
        handleBlur,
        handleChange,
        handleSubmit,
        handleReset,
        touched,
        resetForm,
        errors,
        setFieldValue,
    } = formik;

    // const [valueInput, setValueInput] = useState({
    //     gmail: "",
    //     hoTen: "",
    // });

    // console.log(valueInput);
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    // console.log(touched);
    return (
        <section>
            <div className="max-w-5xl mx-auto w-full">
                <div className="mt-6 flex items-center justify-between  shadow-2xl rounded-2xl relative">
                    <div className="w-1/2  ">
                        <img
                            src="https://fiverr-res.cloudinary.com/npm-assets/layout-service/standard.0638957.png"
                            alt="image-signup"
                            style={{
                                maxWidth: "860px",
                                maxHeight: "650px",
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                borderTopLeftRadius: "12px",
                                borderBottomLeftRadius: "12px",
                            }}
                        />
                        <div className="absolute top-7 left-5 text-white">
                            <h1 className="text-4xl text-white font-bold">
                                Success starts here
                            </h1>
                            <ul className="mt-4">
                                <li className="text-lg mb-2">
                                    <i className="fa-solid fa-check mr-2"></i>
                                    Over 700 categories
                                </li>
                                <li className="text-lg mb-2">
                                    <i className="fa-solid fa-check mr-2"></i>
                                    Quality work done faster
                                </li>
                                <li className="text-lg mb-2">
                                    <i className="fa-solid fa-check mr-2"></i>
                                    Access to talent and businesses across the
                                    globe
                                </li>
                            </ul>
                        </div>
                    </div>
                    <form className="w-1/2 ml-5 pr-7 " onSubmit={handleSubmit}>
                        <h2 className="font-bold text-center text-3xl ">
                            Join with us
                        </h2>

                        {/* <label
                            htmlFor="hoTen"
                            className="block mb-2 ml-1 text-sm font-medium text-gray-900"
                        >
                            Email State
                        </label>
                        <input
                            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text"
                            id="gmail"
                            placeholder="gmail cua ban"
                            value={valueInput.gmail}
                            onChange={(event) => {
                                const idInput = event.target.id;
                                setValueInput({
                                    ...valueInput,
                                    [idInput]: event.target.value,
                                });
                                console.log(event.target.value);
                            }}
                        /> */}
                        <InputCustom
                            placehoder={"Vui lòng nhập email"}
                            label={"Email"}
                            onBlur={handleBlur}
                            value={values.email}
                            touched={touched.email}
                            error={errors.email}
                            onChange={handleChange}
                            name={"email"}
                            id={"email"}
                        />
                        <InputCustom
                            placehoder={"Vui lòng nhập họ tên"}
                            label={"Họ tên"}
                            value={values.name}
                            onBlur={handleBlur}
                            touched={touched.name}
                            error={errors.name}
                            onChange={handleChange}
                            name={"name"}
                            id={"name"}
                        />
                        <div className="mb-2">
                            <label className="block mb-2 ml-1 text-sm font-medium text-gray-900">
                                Mật khẩu
                            </label>
                            <Input.Password
                                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
                                placeholder="Vui lòng nhập password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                iconRender={(visible) =>
                                    visible ? (
                                        <EyeTwoTone />
                                    ) : (
                                        <EyeInvisibleOutlined />
                                    )
                                }
                            />
                            {touched.password && errors.password ? (
                                <p className="text-red-500 py-2">
                                    {errors.password}
                                </p>
                            ) : null}
                        </div>

                        <InputCustom
                            placehoder={"Vui lòng nhập sdt"}
                            label={"Số điện thoại"}
                            onBlur={handleBlur}
                            touched={touched.phone}
                            error={errors.phone}
                            value={values.phone}
                            onChange={handleChange}
                            name={"phone"}
                            id={"phone"}
                        />
                        <div className="flex justify-between gap-3">
                            <div className="mb-2 w-3/6">
                                <label className="block mb-2 ml-1 text-sm font-medium text-gray-900">
                                    Chọn giới tính
                                </label>
                                <select
                                    name="gender"
                                    onBlur={handleBlur}
                                    touched={touched.gender}
                                    id="gender"
                                    onChange={handleChange}
                                    value={values.gender}
                                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
                                >
                                    <option value="">Chọn giới tính</option>
                                    <option value="true">Nam</option>
                                    <option value="false">Nữ</option>
                                </select>
                                {touched.gender && errors.gender ? (
                                    <p className="text-red-500 py-2">
                                        {errors.gender}
                                    </p>
                                ) : null}
                            </div>

                            <div className="w-3/6">
                                <label className="block mb-2 ml-1 text-sm font-medium text-gray-900">
                                    Chọn ngày sinh
                                </label>
                                <DatePicker
                                    name="birthday"
                                    format={"DD-MM-YYYY"}
                                    defaultValue={dayjs(
                                        "01-01-2015",
                                        "DD-MM-YYYY"
                                    )}
                                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
                                    onChange={(date, dateString) => {
                                        console.log(dateString);
                                        values.birthday = dateString;
                                    }}
                                />
                                {touched.birthday && errors.birthday ? (
                                    <p className="text-red-500 py-2">
                                        {errors.birthday}
                                    </p>
                                ) : null}
                            </div>
                        </div>

                        <ButtonCustom
                            type="submit"
                            content={"Sign up"}
                            bgColor={"bg-black"}
                            bgHover="hover:bg-slate-700"
                        />

                        <p className="text-center text-lg font-semibold"> or</p>
                        <div className="flex justify-around items-center mt-4 w-4/6 gap-6 mx-auto">
                            <button className="flex justify-between items-center w-full py-2 px-4 duration-300 font-semibold hover:bg-black hover:text-white tran bg-white border border-gray-400 rounded-lg">
                                <span className="w-5 h-5">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 18 19"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 7.844v3.463h4.844a4.107 4.107 0 0 1-1.795 2.7v2.246h2.907c1.704-1.558 2.685-3.85 2.685-6.575 0-.633-.056-1.246-.162-1.83H9v-.004Z"
                                            fill="#3E82F1"
                                        ></path>
                                        <path
                                            d="M9 14.861c-2.346 0-4.328-1.573-5.036-3.69H.956v2.323A9.008 9.008 0 0 0 9 18.42c2.432 0 4.47-.8 5.956-2.167l-2.907-2.247c-.804.538-1.835.855-3.049.855Z"
                                            fill="#32A753"
                                        ></path>
                                        <path
                                            d="M3.964 5.456H.956a8.928 8.928 0 0 0 0 8.033l3.008-2.318a5.3 5.3 0 0 1-.283-1.699 5.3 5.3 0 0 1 .283-1.699V5.456Z"
                                            fill="#F9BB00"
                                        ></path>
                                        <path
                                            d="m.956 5.456 3.008 2.317c.708-2.116 2.69-3.69 5.036-3.69 1.32 0 2.508.453 3.438 1.338l2.584-2.569C13.465 1.41 11.427.525 9 .525A9.003 9.003 0 0 0 .956 5.456Z"
                                            fill="#E74133"
                                        ></path>
                                    </svg>
                                </span>
                                <p>Google</p>
                            </button>
                            <button className="flex justify-between items-center w-full py-2 px-4 duration-300 font-semibold hover:bg-black hover:text-white bg-white border border-gray-400 rounded-lg">
                                <span className="w-5 h-5">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 12 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.492 19.854v-8.622H.25V7.806h3.242V5.107c0-2.933 2.012-4.529 4.95-4.529 1.408 0 2.617.094 2.967.136v3.064H9.372c-1.598 0-1.906.678-1.906 1.668v2.36h3.605l-.494 3.426H7.466v8.622"
                                            fill="#1877F2"
                                        ></path>
                                    </svg>
                                </span>
                                <p>Facebook</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUpPage;
