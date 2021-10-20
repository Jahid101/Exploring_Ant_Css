import React from 'react';
import { Tag, Divider } from 'antd';
import {
    CheckCircleOutlined,
    SyncOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    ClockCircleOutlined,
    MinusCircleOutlined,
} from '@ant-design/icons';


const index = () => {

    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Sortable Table</h1>

            <Divider orientation="left">Without icon</Divider>
            <div>
                <Tag color="success" >success</Tag>
                <Tag color="processing">processing</Tag>
                <Tag color="error">error</Tag>
                <Tag color="warning">warning</Tag>
                <Tag color="default">default</Tag>
            </div>
            <Divider orientation="left">With icon</Divider>
            <div>
                <Tag icon={<CheckCircleOutlined />} color="success">
                    success
                </Tag>
                <Tag icon={<SyncOutlined spin />} color="processing">
                    processing
                </Tag>
                <Tag icon={<CloseCircleOutlined />} color="error">
                    error
                </Tag>
                <Tag icon={<ExclamationCircleOutlined />} color="warning">
                    warning
                </Tag>
                <Tag icon={<ClockCircleOutlined />} color="default">
                    waiting
                </Tag>
                <Tag icon={<MinusCircleOutlined />} color="default">
                    stop
                </Tag>
            </div>
        </div>
    );
};

export default index;
