import React from 'react';
import { Spin, Space } from 'antd';


const index = () => {

    return (
        <div className="mh-50 mv-50 text-center">
            <h1 className=" underline">Spin</h1>

            <Space size="middle">
                <Spin size="large" style={{ backgroundColor:"goldenrod", padding: "5px"}} />
            </Space>
        </div>
    );
};

export default index;
