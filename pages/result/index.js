import React from 'react';
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';


const Index = () => {

    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Result</h1>

            <Result
                icon={<SmileOutlined style={{color: 'green'}} />}
                title="Great, Ant Design Exploring almost done!"
                // extra={<Button type="primary">Next</Button>}
            />
        </div>
    );
};

export default Index;
