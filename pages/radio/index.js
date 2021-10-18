import React, { useState } from 'react';
import { Input, Radio, Space } from 'antd';


const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
];



const Index = () => {

    const [value, setValue] = useState('Aasim')
    const [search, setSearch] = useState(null)
    const [value1, setValue1] = useState('Apple')
    const [value2, setValue2] = useState('Apple')
    const [value3, setValue3] = useState('Apple')
    const [value4, setValue4] = useState('Apple')
    // value1: 'Apple',
    //     value2: 'Apple',
    //         value3: 'Apple',
    //             value4: 'Apple',


    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value)
    };

    const onChange1 = e => {
        console.log('radio1 checked', e.target.value);
        setValue1(e.target.value);
    };

    const onChange2 = e => {
        console.log('radio2 checked', e.target.value);
        setValue2(e.target.value);
    };

    const onChange3 = e => {
        console.log('radio3 checked', e.target.value);
        setValue3(e.target.value);
    };

    const onChange4 = e => {
        console.log('radio4 checked', e.target.value);
        setValue4(e.target.value);
    };


    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Check out those radio options</h1>
            <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                    <Radio value="Aasim">Aasim</Radio>
                    <Radio value="Bivor">Bivor</Radio>
                    <Radio value="Jahid">Jahid</Radio>
                    <Radio value={4} >
                        More...
                        {value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                    </Radio>
                </Space>
            </Radio.Group>
            <p>You have selected : {value}</p>

            <br />
            <br />
            <>
                <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
                <p>You have selected : {value1}</p>

                <br />
                <Radio.Group options={optionsWithDisabled} onChange={onChange2} value={value2} />
                <p>You have selected : {value2}</p>

                <br />
                <br />
                <Radio.Group
                    options={options}
                    onChange={onChange3}
                    value={value3}
                    optionType="button"
                />
                <p>You have selected : {value3}</p>

                <br />
                <br />
                <Radio.Group
                    options={optionsWithDisabled}
                    onChange={onChange4}
                    value={value4}
                    optionType="button"
                    buttonStyle="solid"
                />
                <p>You have selected : {value4}</p>

            </>


        </div>
    );
};

export default Index;
