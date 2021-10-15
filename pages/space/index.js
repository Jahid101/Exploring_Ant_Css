// import Slider from '@ant-design/react-slick';
import React, { useState } from 'react';
import { Space, Slider, Button } from 'antd';

const Index = () => {

    const [size, setSize] = useState(8);


    return (
        <div className="mv-50 mh-50">
            <h1 className="text-center underline">This is Spacing</h1>
            <Slider value={size} onChange={value => setSize(value)} />
            <br />
            <br />
            <Space size={size}>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="link">Link</Button>
            </Space>
        </div>
    );
};

export default Index;
