import { HomeOutlined, LoadingOutlined, PlayCircleFilled, PlayCircleOutlined, PlusCircleTwoTone, SmileOutlined, SyncOutlined, TrophyTwoTone } from '@ant-design/icons';
import React from 'react';

const index = () => {

    return (
        <div className="icons-list">
            <HomeOutlined />
            <SyncOutlined spin />
            <SmileOutlined rotate={180} />
            <LoadingOutlined />

            <PlusCircleTwoTone />
            <PlayCircleOutlined />
            <TrophyTwoTone />
            <PlayCircleFilled />
        </div>
    );
};

export default index;
