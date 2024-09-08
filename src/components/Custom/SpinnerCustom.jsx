import React from "react";
import { Alert, Flex, Spin } from "antd";
const contentStyle = {
    padding: 50,
    background: "rgba(0, 0, 0, 0.05)",
    borderRadius: 4,
};
const content = <div style={contentStyle} />;

const SpinnerCustom = ({ title }) => (
    <Flex gap="middle" vertical>
        <Spin tip={title} fullscreen="true" size="large">
            {content}
        </Spin>
    </Flex>
);
export default SpinnerCustom;
