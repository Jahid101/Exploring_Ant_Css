import { Button, Col, Row } from 'antd';
import React from 'react';

const index = () => {

    return (
        <div>
            <h1>hi</h1>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>


            <Row gutter={[20,24]}>
                <Col className="gutter-row" span={6}>
                    <div className="bg" style={{backgroundColor: "red"}}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="bg" style={{backgroundColor: "red"}}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="bg" style={{backgroundColor: "red"}}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="bg" style={{backgroundColor: "red"}}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="bg" style={{backgroundColor: "red"}}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="bg" style={{backgroundColor: "red"}}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="bg" style={{backgroundColor: "red"}}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="bg" style={{backgroundColor: "red"}}>col-6</div>
                </Col>
            </Row>

        </div>
    );
};

export default index;
