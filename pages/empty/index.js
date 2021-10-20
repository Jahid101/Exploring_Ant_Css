import React from 'react';
import { Empty } from 'antd';


const Index = () => {

    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">No data available</h1>
            <Empty description={false} />
        </div>
    );
};

export default Index;
