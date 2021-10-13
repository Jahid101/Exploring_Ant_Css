import { Button, Space } from 'antd';
import React from 'react';
import { PoweroffOutlined } from '@ant-design/icons';




const index = () => {

    ////////////////Button/////////////////////////
    // const state = {
    //     loadings: [],
    // };

    // enterLoading = index => {
    //     this.setState(({ loadings }) => {
    //         const newLoadings = [...loadings];
    //         newLoadings[index] = true;

    //         return {
    //             loadings: newLoadings,
    //         };
    //     });
    //     setTimeout(() => {
    //         this.setState(({ loadings }) => {
    //             const newLoadings = [...loadings];
    //             newLoadings[index] = false;

    //             return {
    //                 loadings: newLoadings,
    //             };
    //         });
    //     }, 6000);
    // };


    // const { loadings } = this.state;

    return (
        <>

            {/* Normal button */}
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


            {/* Loading Button */}
            <div>
            </div>

            

        </>
    );
};

export default index;
