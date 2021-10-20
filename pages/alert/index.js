import React from 'react';
import { Alert } from 'antd';


const index = () => {

    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Directory Tree</h1>
            <Alert
                message="Congrats!"
                description="You successfully made this far"
                type="success"
                showIcon
            />
        </div>
    );
};

export default index;
