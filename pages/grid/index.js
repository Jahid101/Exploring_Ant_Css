import { Col, Divider, Row } from 'antd';
import React from 'react';

const index = () => {

    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">This is Grid</h1>
            <Divider orientation="left">Sub-element align full Grid</Divider>
            <Row justify="space-around" style={{ backgroundColor: "gray" }}>
                <Col style={{ backgroundColor: "red" }} span={4}>col-4</Col>
                <Col style={{ backgroundColor: "red" }} span={4}>col-4</Col>
                <Col style={{ backgroundColor: "red" }} span={4}>col-4</Col>
                <Col style={{ backgroundColor: "red" }} span={4}>col-4</Col>
            </Row>

            <Divider orientation="left" plain>Lets go</Divider>
            <Row justify="space-around" style={{ backgroundColor: "gray" }}>
                <Col style={{ backgroundColor: "red" }} span={4}>col-4</Col>
                <Col style={{ backgroundColor: "red" }} span={4}>col-4</Col>
                <Col style={{ backgroundColor: "red" }} span={4}>col-4</Col>
                <Col style={{ backgroundColor: "red" }} span={4}>col-4</Col>
            </Row>
        </div>
    );
};

export default index;