import React, { useContext, useState } from "react";
import InputCustom from "../components/Custom/InputCustom";
import ButtonCustom from "../components/Custom/ButtonCustom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Select, Space } from "antd";
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
            password: "",
            gender: "",
            birthday: "",
            skill: [],
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
            skill: yup.array().required("Vui lòng chọn kĩ năng của bạn có"),
        }),

        onSubmit: (values) => {
            console.log(values);
            authService
                .signUp(values)
                .then((res) => {
                    //console.log(res.data.content);
                    // setLocalStorage("userInfo", res.data.content);
                    showNotification(
                        "Đăng kí thành công, hãy đăng nhập để sử dụng nhé",
                        "success",
                        3000
                    );
                    // dispatch(getInfoUser(res.data.content));
                    setTimeout(() => {
                        navigate(path.signin);
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
    const handleChange1 = (value) => {
        console.log(value);
    };
    const options = [
        {
            label: "HTML, CSS, JavaScript",
            value: "HTML, CSS, JavaScript",
            emoji: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 32 32"
                >
                    <path fill="#f5de19" d="M2 2h28v28H2z" />
                    <path d="M20.809 23.875a2.87 2.87 0 0 0 2.6 1.6c1.09 0 1.787-.545 1.787-1.3c0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964c0-1.973 1.5-3.476 3.853-3.476a3.89 3.89 0 0 1 3.742 2.107L25 18.128A1.79 1.79 0 0 0 23.311 17a1.145 1.145 0 0 0-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133c0 2.369-1.861 3.667-4.36 3.667a5.06 5.06 0 0 1-4.795-2.691Zm-9.295.228c.413.733.789 1.353 1.693 1.353c.864 0 1.41-.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 0 1-3.947-2.4Z" />
                </svg>
            ),

            desc: "HTML, CSS, JavaScript",
        },
        {
            label: ".NET Core , C#",
            value: ".NET Core",
            emoji: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 128 128"
                >
                    <path
                        fill="#9b4f96"
                        d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7s-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7"
                    />
                    <path
                        fill="#68217a"
                        d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7s2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8z"
                    />
                    <path
                        fill="#fff"
                        d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20c-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8z"
                    />
                </svg>
            ),
            desc: ".NET Core , C#",
        },
        {
            label: "Java, Spring Boot ",
            value: "Java, Spring Boot ",
            emoji: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                >
                    <g fill="none">
                        <rect width="256" height="256" fill="#f4f2ed" rx="60" />
                        <path
                            fill="#4e7896"
                            d="M101.634 182.619s-7.68 4.674 5.345 6.011c15.728 2.004 24.044 1.669 41.407-1.668c0 0 4.674 3.009 11.02 5.344c-39.075 16.696-88.497-1.002-57.772-9.687m-5.009-21.705s-8.35 6.346 4.674 7.679c17.028 1.669 30.391 2.004 53.433-2.667c0 0 3.009 3.341 8.015 5.01c-47.083 14.025-99.85 1.333-66.122-10.019zm92.17 38.07s5.676 4.674-6.346 8.35c-22.376 6.678-93.839 8.685-113.876 0c-7.009-3.009 6.347-7.352 10.686-8.015c4.342-1.002 6.678-1.002 6.678-1.002c-7.68-5.344-51.095 11.02-22.041 15.729c79.813 13.027 145.603-5.676 124.896-15.028zm-83.488-60.781s-36.402 8.685-13.028 11.687c10.019 1.333 29.721 1.002 48.089-.335c15.028-1.334 30.09-4.007 30.09-4.007s-5.345 2.338-9.017 4.674c-37.099 9.693-108.23 5.351-87.858-4.668c17.37-8.35 31.724-7.351 31.724-7.351m65.116 36.401c37.407-19.37 20.037-38.07 8.015-35.731c-3.009.667-4.342 1.334-4.342 1.334s1.001-2.004 3.34-2.667c23.709-8.35 42.413 25.046-7.679 38.07c0 0 .335-.335.666-1.002zm-61.444 52.76c36.067 2.339 91.168-1.334 92.505-18.369c0 0-2.667 6.678-29.72 11.688c-30.722 5.676-68.796 5.009-91.168 1.333c0 0 4.674 4.007 28.386 5.344z"
                        />
                        <path
                            fill="#f58219"
                            d="M147.685 28s20.704 21.039-19.702 52.76c-32.394 25.712-7.351 40.408 0 57.101c-19.035-17.028-32.722-32.059-23.377-46.085C118.331 71.083 156.062 61.064 147.685 28M137 123.842c9.683 11.02-2.667 21.039-2.667 21.039s24.711-12.686 13.359-28.387c-10.354-15.028-18.368-22.376 25.046-47.425c0 0-68.461 17.028-35.731 54.766z"
                        />
                    </g>
                </svg>
            ),
            desc: "Java, Spring Boot ",
        },
    ];
    return (
        <section>
            <div className="max-w-5xl mx-auto w-full">
                <div className="mt-4 flex items-center justify-between  shadow-2xl rounded-2xl relative">
                    <div className="w-1/2  ">
                        <img
                            src="https://fiverr-res.cloudinary.com/npm-assets/layout-service/standard.0638957.png"
                            alt="image-signup"
                            style={{
                                maxWidth: "860px",
                                maxHeight: "660px",
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
                    <form
                        className="w-1/2 ml-5 pr-7 pb-3 pt-3"
                        onSubmit={handleSubmit}
                    >
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
                                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full px-2.5 py-2"
                                placeholder="Vui lòng nhập password"
                                name="password"
                                onChange={(event) => {
                                    setFieldValue(
                                        "password",
                                        event.target.value
                                    );
                                }}
                                onBlur={handleBlur}
                                value={values.password ? values.password : ""}
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
                                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full px-2.5 py-2"
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
                                    // defaultValue={dayjs(
                                    //     "01-01-2015",
                                    //     "DD-MM-YYYY"
                                    // )}
                                    value={
                                        values.birthday
                                            ? dayjs(
                                                  values.birthday,
                                                  "DD-MM-YYYY"
                                              )
                                            : null
                                    }
                                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full px-2.5 py-2"
                                    onChange={(date, dateString) => {
                                        console.log(dateString);
                                        // values.birthday = dateString || "";
                                        setFieldValue(
                                            "birthday",
                                            dateString || ""
                                        );
                                    }}
                                />
                                {touched.birthday && errors.birthday ? (
                                    <p className="text-red-500 py-2">
                                        {errors.birthday}
                                    </p>
                                ) : null}
                            </div>
                        </div>

                        <div className="mb-2">
                            <label className="block mb-2 ml-1 text-sm font-medium text-gray-900">
                                Chọn skills
                            </label>
                            <Select
                                mode="multiple"
                                style={{
                                    width: "100%",
                                }}
                                name="skill"
                                value={values.skill}
                                touched={touched.skill}
                                error={errors.skill}
                                placeholder="Chọn kĩ năng bạn có"
                                onChange={(value) => {
                                    setFieldValue("skill", value);
                                }}
                                options={options}
                                optionRender={(option) => (
                                    <Space>
                                        <span
                                            role="img"
                                            aria-label={option.data.label}
                                        >
                                            {option.data.emoji}
                                        </span>
                                        {option.data.desc}
                                    </Space>
                                )}
                            />
                            {touched.skill && errors.skill ? (
                                <p className="text-red-500 py-2">
                                    {errors.skill}
                                </p>
                            ) : null}
                        </div>

                        <ButtonCustom
                            type="submit"
                            content={"Sign up"}
                            bgColor={"bg-black"}
                            bgHover="hover:bg-slate-700"
                        />
                        {/* <ButtonCustom
                            onClick={handleReset}
                            content={"Reset"}
                            bgColor={"bg-black"}
                            bgHover="hover:bg-slate-700"
                        /> */}

                        <span className="text-center text-md block p-0 m-0">
                            Or
                        </span>

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
