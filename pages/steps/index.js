import React, { useState } from 'react';
import { Divider, Steps } from 'antd';


const { Step } = Steps;


const Index = () => {

    const [current, setCurrent] = useState(0)

    const onChange = current => {

        current++;

        if (current < 3) {
            setCurrent(current++)
        } else {
            setCurrent(0)
        }

    };



    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Follow the steps to complete the process</h1>
            <Steps current={1} percent={60}>
                <Step title="Done" description="This is a description." />
                <Step title="On going" subTitle="Left 00:00:08" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
            </Steps>

            <Divider />

            <Steps current={current} onChange={() => onChange(current)} direction="vertical">
                <Step title="Jahid Noob" description="This is a description." />
                <Step title="Bivor" description="This is a description." />
                <Step title="Aasim" description="This is a description." />
            </Steps>


        </div>
    );
};

export default Index;
