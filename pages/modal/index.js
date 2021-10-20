import React from 'react';
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';


const { confirm } = Modal;

const Index = () => {

    function showConfirm() {
        confirm({
            title: 'Do you Want to join the weeding party?',
            icon: <ExclamationCircleOutlined />,
            content: 'Weeding invitation',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }



    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Modal</h1>

            <Space wrap>
                <h3>You are invited for the weeding. Are you interested ?</h3>
                <Button onClick={showConfirm}>Confirm</Button>
            </Space>
        </div>
    );
};

export default Index;
