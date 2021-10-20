import React from 'react';
import { Image } from 'antd';

const Index = () => {

    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Image</h1>
            <Image
                width={200}
                src="https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                preview={{
                    src: 'https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
                }}
            />
        </div>
    );
};

export default Index;
