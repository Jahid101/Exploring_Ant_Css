import React from 'react';
import { Popconfirm, message } from 'antd';


const index = () => {

    function confirm(e) {
        console.log(e);
        message.success('Deleted');
    }

    function cancel(e) {
        console.log(e);
        message.error('Canceled');
    }

    return (
        <div className="mh-50 mv-50 text-center">
            <h1 className="text-center underline">Pop Confirm</h1>

            <Popconfirm
                title="Are you sure to delete this task?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
            >
                <a href="#" style={{fontSize: "25px" }}>Delete</a>
            </Popconfirm>
        </div>
    );
};

export default index;
