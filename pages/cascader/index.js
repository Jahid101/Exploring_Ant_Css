import React from 'react';
import { Cascader } from 'antd';



const index = () => {

    const options = [
        {
            value: 'Asim',
            label: 'Asim',
            children: [
                {
                    value: 'Bivor',
                    label: 'Bivor',
                    children: [
                        {
                            value: 'Jahid',
                            label: 'Jahid',
                        },
                        {
                            value: 'this lebel is disabled',
                            label: 'I am disabled',
                            disabled: true,
                        },
                    ],
                },
            ],
        },
        {
            value: 'Shohel',
            label: 'Shohel',
            children: [
                {
                    value: 'Tanaaz',
                    label: 'Tanaaz',
                    children: [
                        {
                            value: 'Symon',
                            label: 'Symon',
                        },
                    ],
                },
            ],
        },
    ];


    function onChange(value, selectedOptions) {
        console.log(value, selectedOptions);
    }

    function filter(inputValue, path) {
        return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }



    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Hi I am Cascader. Quick! make a search</h1>
            <Cascader
                options={options}
                onChange={onChange}
                placeholder="Search or Select"
                showSearch={{ filter }}
            />
        </div>
    );
};

export default index;
