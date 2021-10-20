import React from 'react';
import { Descriptions } from 'antd';

const Index = () => {

    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Descriptions</h1>

            <Descriptions title="User Info" layout="vertical">
                <Descriptions.Item label="UserName">Jahid</Descriptions.Item>
                <Descriptions.Item label="Telephone">017111111111</Descriptions.Item>
                <Descriptions.Item label="Live">Dhaka</Descriptions.Item>
                <Descriptions.Item label="Address" span={2}>
                    Matikata, Dhaka Cantonment, Dhaka
                </Descriptions.Item>
                <Descriptions.Item label="Remark">Noob</Descriptions.Item>
            </Descriptions>
        </div>
    );
};

export default Index;
