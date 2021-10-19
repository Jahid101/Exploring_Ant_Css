import { Rate } from 'antd';
import React, { useState } from 'react';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';


const Index = () => {

    const [value, setValue] = useState(null)
    const [value2, setValue2] = useState(null)
    const [value3, setValue3] = useState(null)

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

            <Rate allowHalf defaultValue={.5}
                onChange={setValue}
            />
            <p>You have selected : {value}</p>

            <>
                <br />
                <Rate defaultValue={2} character={({ index }) => index + 1}
                    onChange={setValue2}
                />
                <p>You have selected : {value2}</p>

                <br />
                <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]}
                    onChange={setValue3} />
                <p>You have selected : {value3}</p>
            </>
        </div>
    );
};

export default Index;
