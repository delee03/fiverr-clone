import React from "react";

const BreadCrumCustom = ({ breadcrum, title }) => {
    return (
        <>
            <div className="flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1"
                    />
                </svg>
                <span className="text-sm hover:underline">/ {breadcrum}</span>
            </div>
            <h2 className="mt-5 mb-2 font-bold text-3xl text-left">{title}</h2>
            <div className="flex items-center gap-2 mb-5 -mt-2">
                <p className="text-gray-600">
                    Create, build, and develop your website with skilled website
                    developers |
                </p>
                <button className="flex items-center gap-2 text-sm border-none py-1 px-3 bg-white hover:rounded-xl hover:bg-gray-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.2em"
                        height="1.2em"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m-2 14.5v-9l6 4.5z"
                        />
                    </svg>
                    <span className="text-base font-semibold">
                        How Fiverr Works
                    </span>
                </button>
            </div>
        </>
    );
};

export default BreadCrumCustom;
