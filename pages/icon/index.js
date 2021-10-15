import { HomeOutlined, LoadingOutlined, PlayCircleFilled, PlayCircleOutlined, PlusCircleTwoTone, SmileOutlined, SyncOutlined, TrophyTwoTone } from '@ant-design/icons';
import React from 'react';

const index = () => {

    return (
        <div className="icons-list mv-50 mh-50">
            <h1 className="text-center underline">Hey there! its all about icons</h1>

            <HomeOutlined
                style={{ color: 'black', backgroundColor: 'blue', fontSize: '50px', margin:'30px' }}
            />

            <SyncOutlined
                style={{ color: 'blue', backgroundColor: 'red', fontSize: '50px', margin:'30px' }}
                spin
            />

            <SmileOutlined
                style={{ color: 'black', backgroundColor: 'yellow', fontSize: '50px', margin:'30px' }}
                rotate={0}
            />

            <LoadingOutlined
                style={{ color: 'blue', backgroundColor: 'white', fontSize: '50px', margin:'30px' }}
            />

            <PlusCircleTwoTone
                style={{ color: 'red', backgroundColor: 'green', fontSize: '50px', margin:'30px' }}
            />

            <PlayCircleOutlined
                style={{ color: 'purple', backgroundColor: 'orange', fontSize: '50px', margin:'30px' }}
            />

            <TrophyTwoTone
                style={{ color: 'red', backgroundColor: 'red', fontSize: '50px', margin:'30px' }}
            />

            <PlayCircleFilled
                style={{ color: 'green', backgroundColor: 'gray', fontSize: '50px', margin:'30px' }}
            />

        </div>
    );
};

export default index;
