import React from 'react';
import { Statistic, Row, Col } from 'antd';

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

const Index = () => {

    function onFinish() {
        console.log('finished!');
    }



    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Let the countdown keep going</h1>

            <Row gutter={16}>
                <Col span={12}>
                    <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
                </Col>
                <Col span={12}>
                    <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
                </Col>
            </Row>

        </div>
    );
};

export default Index;
