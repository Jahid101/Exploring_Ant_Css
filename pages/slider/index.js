import React from 'react';
import { Slider } from 'antd';


const style = {
    display: 'inline-block',
    height: 300,
    marginLeft: 70,
};



const index = () => {

    const marks = {
        0: '0°C',
        26: '26°C',
        37: '37°C',
        100: {
            style: {
                color: 'green',
            },
            label: <strong>100°C</strong>,
        },
    };


    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">This sliders are great</h1>

            <Slider range={{ draggableTrack: true }} defaultValue={[25, 45]} />

            <br />
            <br />
            <div style={style}>
                <Slider vertical range marks={marks} defaultValue={[25, 45]} />
            </div>
        </div>
    );
};

export default index;
