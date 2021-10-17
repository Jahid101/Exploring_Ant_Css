import React, { useState } from 'react';
import { Mentions } from 'antd';

const { Option } = Mentions;


const MOCK_DATA = {
    '@': ['Aasim', 'Bivor', 'Jahid'],
    '#': ['Director', 'Team Lead', 'Noob Dev'],
};


const Index = () => {

    const [prefix, setPrefix] = useState('@')

    const onSearch = (_, prefix) => {
        setPrefix(prefix);
    };



    return (
        <div className="icons-list mv-50 mh-50">
            <h1 className="text-center underline">Hey! You are being mentioned here</h1>

            <p>Mention carefully! Tag wisely</p>
            <Mentions
                autoSize
                style={{ width: '100%' }}
                placeholder="input @ to mention people, # to mention tag"
                prefix={['@', '#']}
                onSearch={onSearch}
            >
                {(MOCK_DATA[prefix] || []).map(value => (
                    <Option key={value} value={value}>
                        {value}
                    </Option>
                ))}
            </Mentions>

        </div>
    );
};

export default Index;
