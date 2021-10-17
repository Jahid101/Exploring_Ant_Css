import React, { useState } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;



const Index = () => {

    const [input, setInput] = useState()

    const onChange = (value) => {
        console.log(value);
        setInput(e.nativeEvent.data)
    };


    return (
        <div className="icons-list mv-50 mh-50">
            <h1 className="text-center underline">Hey there, Fill up those input fields</h1>

            <Input placeholder="input with clear icon" allowClear onChange={onChange} />
            <br />
            <br />
            <TextArea placeholder="textarea with clear icon" allowClear onChange={onChange} />
            {/* <p>{input}</p> */}

        </div>
    );
};

export default Index;
