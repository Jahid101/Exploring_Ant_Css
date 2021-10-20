import React, { useState } from 'react';
import { Badge, Button } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';



const Index = () => {

    const [value, setValue] = useState(1)


    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Avatar</h1>

            <Badge count={value}>
                <NotificationOutlined style={{ fontSize: 30 }} />
            </Badge>
            <Badge count={value + 2}>
                <a href="/go" target="_blank" style={{ fontSize: 20, marginLeft: '20px' }}>
                    Link is here
                </a>
            </Badge>

            <Button style={{ marginLeft: '20px' }} onClick={() => setValue(value - 1)} type="primary" size="small">
                (-1)
            </Button>
            <Button style={{ marginLeft: '20px' }} onClick={() => setValue(value + 1)} type="primary" size="small">
                (+1)
            </Button>


        </div>
    );
};

export default Index;
