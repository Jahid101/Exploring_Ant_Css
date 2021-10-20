import React, { useState } from 'react';
// import './index.css';
import { Avatar, Badge, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';




const Index = () => {

    const [value, setValue] = useState(1)


    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Avatar</h1>

            <span className="avatar-item mh-20">
                <Badge count={value}>
                    <Avatar shape="circle" icon={<UserOutlined style={{ color: "blue", fontSize: "30px" }} />} />
                </Badge>
            </span>

            <Button onClick={() => setValue(value + 1)} type="primary" size="small">
                (+1)
            </Button>

            <br />
            <br />
            <span className="mh-20">
                <Badge dot>
                    <Avatar shape="square" size="large" icon={<UserOutlined style={{ color: "black", fontSize: "40px" }} />} />
                </Badge>
            </span>


        </div>
    );
};

export default Index;
