import React from 'react';
import { InputNumber, Button, Space } from 'antd';


const Index = () => {

    const [value, setValue] = React.useState('00');
    const [valueTwo, setValueTwo] = React.useState('00');

    return (
        <div className="icons-list mv-50 mh-50">
            <h1 className="text-center underline">Hey! Check out these input numbers</h1>
            <Space>
                <p>Hi I am a bordered input Number : </p>
                <InputNumber min={1} max={10} value={value} onChange={setValue} />
                <Button
                    type="primary"
                    onClick={() => {
                        setValue(0);
                    }}
                >
                    Reset
                </Button>
            </Space>

            <br />
            <br />
            <Space>
                <p>Hi I am a Borderless input Number : </p>
                <InputNumber min={1} max={10} value={valueTwo} bordered={false} onChange={setValueTwo} />
                <Button
                    type="primary"
                    onClick={() => {
                        setValueTwo(0);
                    }}
                >
                    Reset
                </Button>
            </Space>

        </div>
    );
};

export default Index;
