import { Button } from 'antd';
import React from 'react';

const index = () => {

    return (
        <div>
            <Button type="primary" danger>
                Primary
            </Button>
            <Button danger>Default</Button>
            <Button type="dashed" danger>
                Dashed
            </Button>
            <Button type="text" danger>
                Text
            </Button>
            <Button type="link" danger>
                Link
            </Button>
        </div>
    );
};

export default index;
