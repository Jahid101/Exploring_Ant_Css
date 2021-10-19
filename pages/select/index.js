import React, { useState } from 'react';
import { Select, Tag } from 'antd';



const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }, { value: 'blue' }, { value: 'yellow' }, { value: 'red' }, { value: 'black' }];


const Index = () => {

    const [selected, setSelected] = useState("")

    const tagRender = (props) => {
        const { label, value, closable, onClose } = props;
        const onPreventMouseDown = event => {
            event.preventDefault();
            event.stopPropagation();
        };
        return (
            <Tag
                color={value}
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                style={{ marginRight: 3 }}
            >
                {label}
            </Tag>
        );
    }


    const handleChange = (value) => {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
        setSelected(value);
    }


    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">This select options are awesome</h1>

            <Select
                onChange={handleChange}
                mode="multiple"
                showArrow
                tagRender={tagRender}
                defaultValue={['gold', 'cyan']}
                style={{ width: '100%' }}
                options={options}
            />
            <br />
            <p>You have selected : {`${selected}`}</p>
        </div>
    );
};

export default Index;
