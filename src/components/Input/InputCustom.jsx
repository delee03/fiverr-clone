import React from "react";

const InputCustom = ({
    label,
    placehoder,
    name,
    onChange,
    value,
    error,
    id,
    onBlur,
    classWrapper = "",
    touched,
    typeInput = "text",
}) => {
    return (
        <div className={classWrapper}>
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-gray-900"
            >
                {label}
            </label>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type={typeInput}
                value={value}
                name={name}
                onChange={onChange}
                placeholder={placehoder}
            />
        </div>
    );
};

export default InputCustom;
