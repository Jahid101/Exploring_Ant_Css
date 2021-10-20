import React from 'react';
import { Transfer, Switch } from 'antd';


const Index = () => {


    const [oneWay, setOneWay] = React.useState(false);
    const [mockData, setMockData] = React.useState([]);
    const [targetKeys, setTargetKeys] = React.useState([]);

    React.useEffect(() => {
        const newTargetKeys = [];
        const newMockData = [];

        for (let i = 0; i < 2000; i++) {
            const data = {
                key: i.toString(),
                title: `content${i + 1}`,
                description: `description of content${i + 1}`,
                chosen: Math.random() * 2 > 1,
            };
            if (data.chosen) {
                newTargetKeys.push(data.key);
            }
            newMockData.push(data);
        }

        setTargetKeys(newTargetKeys);
        setMockData(newMockData);
    }, []);
    

    const onChange = (newTargetKeys, direction, moveKeys) => {
        console.log(newTargetKeys, direction, moveKeys);
        setTargetKeys(newTargetKeys);
    };



    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Lets swipe some data here and there</h1>

            <>
                <Transfer
                    dataSource={mockData}
                    targetKeys={targetKeys}
                    onChange={onChange}
                    render={item => item.title}
                    oneWay={oneWay}
                    pagination
                />
                <br />
                <Switch
                    unCheckedChildren="one way"
                    checkedChildren="one way"
                    checked={oneWay}
                    onChange={setOneWay}
                />
            </>

        </div>
    );
};

export default Index;
