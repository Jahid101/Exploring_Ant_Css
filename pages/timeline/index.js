import React from 'react';
import { useState } from 'react';
import { Timeline, Radio } from 'antd';


const Index = () => {
    const [mode, setMode] = useState('left');

    const onChange = e => {
        setMode(e.target.value);
    };



    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Timeline for new project</h1>

            <Timeline mode={mode}>
                <Timeline.Item label="1115-11-01">Create a services</Timeline.Item>
                <Timeline.Item label="1115-11-01 109:12:11">Solve initial network problems</Timeline.Item>
                <Timeline.Item>Technical testing</Timeline.Item>
                <Timeline.Item label="1121-11-01 09:12:11">Network problems being solved</Timeline.Item>
            </Timeline>
        </div>
    );
};

export default Index;
