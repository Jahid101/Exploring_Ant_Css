import { Rate } from 'antd';
import React from 'react';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';


const index = () => {

    const customIcons = {
        1: <FrownOutlined />,
        2: <FrownOutlined />,
        3: <MehOutlined />,
        4: <SmileOutlined />,
        5: <SmileOutlined />
    };



    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Rate us</h1>

            <Rate allowHalf defaultValue={.5} />
            <>
                <Rate defaultValue={2} character={({ index }) => index + 1} />
                <br />
                <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
            </>
        </div>
    );
};

export default index;
