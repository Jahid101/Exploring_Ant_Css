import React from 'react';
import { Pagination } from 'antd';



const index = () => {


    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">This is pagination</h1>
            <Pagination
                total={85}
                showSizeChanger
                showQuickJumper
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
            // showTotal={total => `Total ${total} items`}
            />
        </div>
    );
};

export default index;
