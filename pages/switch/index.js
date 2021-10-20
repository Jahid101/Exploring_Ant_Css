import React, { useState } from 'react';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';



const Index = () => {

    const [value, setValue] = useState()
    const [value2, setValue2] = useState()
    const [value3, setValue3] = useState()

    const handleValueChange = (value) => {
        if (value) {
        setValue('on')
        }else{
        setValue('off')
        }
    }

    const handleValueChange2 = (value) => {
        if (value) {
        setValue2(<CheckOutlined />)
        }else{
        setValue2(<CloseOutlined />)
        }
    }
    const handleValueChange3 = (value) => {
        if (value) {
        setValue3(1)
        }else{
        setValue3(0)
        }
    }



    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Lets check these switch</h1>

            <div style={{ display: 'flex' }}>
                <div className="mh-50">
                    <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked
                        onChange={handleValueChange}
                    />
                    <br />
                    <br />
                    <p>{value}</p>
                </div>

                <div className="mh-50">
                    <Switch checkedChildren="1" unCheckedChildren="0" 
                        onChange={handleValueChange3}
                    />
                    <br />
                    <br />
                    <p>{value3}</p>
                </div>

                <div className="mh-50">
                    <Switch
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        defaultChecked
                        onChange={handleValueChange2}
                    />
                    <br />
                    <br />
                    <p>{value2}</p>
                </div>
            </div>

        </div >
    );
};

export default Index;
