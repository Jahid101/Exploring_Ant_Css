import React from 'react';
import { Carousel } from 'antd';



const Index = () => {

    const contentStyle = {
        height: '360px',
        // width: '360px',
        color: '#ffff',
        lineHeight: '160px',
        textAlign: 'center',
        background: 'goldenrod',
    };



    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Carousel</h1>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}><img src="https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=867&q=80" alt="" />
                    </h3>
                </div>
                
            </Carousel>
        </div>
    );
};

export default Index;
