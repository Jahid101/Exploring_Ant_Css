import React, { useState } from 'react';
import { TimePicker } from 'antd';


const Index = () => {

    const [value, setValue] = useState(0)

    const handleValueChange = (time, timeString) => {
        console.log(timeString)
        setValue(timeString)
    }



    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Lets Pick a time for Today meeting</h1>


            <TimePicker.RangePicker use12Hours onChange={handleValueChange} />
            <br />
            <br />
            <p>You have picked : <br /> From : {value[0]} <br /> To : {value[1]}</p>

        </div>
    );
};

export default Index;
