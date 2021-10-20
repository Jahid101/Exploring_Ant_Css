import { message, Button } from 'antd';
import React from 'react';

const index = () => {

    const success = () => {
        message
            .loading('Please wait..', 2.5)
            .then(() => message.success('Stay active and work hard', 2.5))
            // .then(() => message.info('Loading finished is finished', 2.5));
    };


    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center">There is a message for you click the button</h1>

            <Button onClick={success}>Show Message</Button>
        </div>
    );
};

export default index;
