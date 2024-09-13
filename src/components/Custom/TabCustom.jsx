import React from "react";
import { Tabs } from "antd";
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: "1",
        label: <h2 className="font-semibold text-xl text-slate-700">Basic</h2>, //có thể truyền 1 React.Node
        children: (
            <div className="mx-auto w-11/12 py-3">
                <h2 className="font-semibold text-3xl">$25</h2>
                <p className="text-lg">Save up to 20% with Subscribe to Save</p>
                <p className="mt-4 text-lg">
                    <strong>Hill Package - For Start</strong> -up 3 logo design
                    along with white and transparent background (JPEG PNG) Files
                    + Source files
                </p>
                <span className="my-2 mt-2 block  font-bold text-base">
                    What's Included
                </span>
                <button className="mx-auto px-3 w-full py-2 mt-3 text-lg rounded-md bg-black text-white m">
                    Continue
                </button>
                <a href="#" className="py-2 block text-center   text-gray-500">
                    Compare Packages
                </a>
            </div>
        ),
    },
    {
        key: "2",
        label: (
            <h2 className="font-semibold text-xl text-slate-700">Standard</h2>
        ), //có thể truyền 1 React.Node
        children: (
            <div className="mx-auto w-11/12 py-3">
                <h2 className="font-semibold text-3xl">$39</h2>
                <p className="text-lg">Save up to 20% with Subscribe to Save</p>
                <p className="mt-4 text-lg">
                    <strong>Hill Package - For Start</strong> -up 3 logo design
                    along with white and transparent background (JPEG PNG) Files
                    + Source files
                </p>
                <span className="my-2 mt-2 block  font-bold text-base">
                    What's Included
                </span>
                <button className="mx-auto px-3 w-full py-2 mt-3 text-lg rounded-md bg-black text-white m">
                    Continue
                </button>
                <a href="#" className="py-2 block text-center   text-gray-500">
                    Compare Packages
                </a>
            </div>
        ),
    },
    {
        key: "3",
        label: (
            <h2 className="font-semibold text-xl text-slate-700">Premium</h2>
        ), //có thể truyền 1 React.Node
        children: (
            <div className="mx-auto w-11/12 py-3">
                <h2 className="font-semibold text-3xl">$50</h2>
                <p className="text-lg">Save up to 20% with Subscribe to Save</p>
                <p className="mt-4 text-lg">
                    <strong>Hill Package - For Start</strong> -up 3 logo design
                    along with white and transparent background (JPEG PNG) Files
                    + Source files
                </p>
                <span className="my-2 block mt-2  font-bold text-base">
                    What's Included
                </span>
                <button className="mx-auto px-3 w-full py-2 mt-3 text-lg rounded-md bg-black text-white m">
                    Continue
                </button>
                <a href="#" className="py-2 block text-center   text-gray-500">
                    Compare Packages
                </a>
            </div>
        ),
    },
];
const TabCustom = () => {
    return (
        <>
            <Tabs
                defaultActiveKey="2"
                items={items}
                centered
                onChange={onChange}
            />
        </>
    );
};

export default TabCustom;
