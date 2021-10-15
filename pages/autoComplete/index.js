import React, { useState } from 'react';
import { Input, AutoComplete } from 'antd';
import { UserOutlined } from '@ant-design/icons';



const Index = () => {

    const [value, setValue] = useState(null)

    const renderTitle = (title) => (
        <span>
            {title}
            <a
                style={{
                    float: 'right',
                }}
                href=""
                target="_blank"
                rel="noopener noreferrer"
            >
                more
            </a>
        </span>
    );

    const renderItem = (title, count) => ({
        value: title,
        label: (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                {title}
                <span>
                    <UserOutlined /> {count}
                </span>
            </div>
        ),
    });

    const options = [
        {
            label: renderTitle('Director'),
            options: [renderItem('Asim', 111), renderItem('AntDesign UI', 1010)],
        },
        {
            label: renderTitle('Team Lead'),
            options: [renderItem('Bivor', 101), renderItem('AntDesign FAQ', 1001)],
        },
        {
            label: renderTitle('Noob Developer'),
            options: [renderItem('Jahid', 777)],
        },
    ];



    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">This is Auto Complete</h1>

            <AutoComplete
                dropdownClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={500}
                style={{
                    width: 250,
                }}
                onChange={setValue}
                options={options}
            >
                <Input.Search size="large" placeholder="input here" />
            </AutoComplete>

            <h3 className="text-center"
                style={{ float: 'right', marginRight: '50%' }}
            >
                You are searching:
                <span style={{ color: 'blue'}}>{value}</span></h3>
        </div>
    );
};

export default Index;
