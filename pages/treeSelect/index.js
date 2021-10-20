import React, { useState } from 'react';
import { TreeSelect } from 'antd';

const { SHOW_PARENT } = TreeSelect;

const treeData = [
    {
        title: 'Node1',
        value: '0-0',
        key: '0-0',
        children: [
            {
                title: 'Child Node1',
                value: '0-0-0',
                key: '0-0-0',
            },
        ],
    },
    {
        title: 'Node2',
        value: '0-1',
        key: '0-1',
        children: [
            {
                title: 'Child Node3',
                value: '0-1-0',
                key: '0-1-0',
            },
            {
                title: 'Child Node4',
                value: '0-1-1',
                key: '0-1-1',
            },
            {
                title: 'Child Node5',
                value: '0-1-2',
                key: '0-1-2',
            },
        ],
    },
];


const Index = () => {

    const [value, setValue] = useState('0-0-0')

    const handleChange = value => {
        console.log('onChange ', value);
        setValue(value);
    };


    const tProps = {
        treeData,
        value: value,
        onChange: handleChange,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
        placeholder: 'Please select',
        style: {
            width: '100%',
        },
    };



    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Tree Selection</h1>
            <TreeSelect {...tProps} />
        </div>
    );
};

export default Index;
