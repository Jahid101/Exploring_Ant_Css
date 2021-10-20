import React from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


const { Meta } = Card;

const Index = () => {

    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Card</h1>
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
                    />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Noob"
                    description="sdjbfslbbas ahsdkuhasd oaishdas aiswhdias oaiswhjdias oaiwhjdais aoijd asod asdhoia"
                />
            </Card>
        </div>
    );
};

export default Index;
