import React from 'react';
import { Button, notification, Space } from 'antd';



const Index = () => {

    const openNotificationWithIcon = type => {
        notification[type]({
            message: [type],
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };


    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Notification</h1>

            <Space>
                <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
                <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
                <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
                <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
            </Space>
        </div>
    );
};

export default Index;
