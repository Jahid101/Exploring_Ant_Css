import React, { useState } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber, Button } from 'antd';



const Index = () => {

    const [input, setInput] = useState("")


    const takeFormData = (values) => {
        console.log("Success:", values);
        // firebase.analytics().logEvent("sign in button");
        // if (validate()) {
        //     login();
        // }
    }


    const { Option } = Select;
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 5,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 12,
            },
        },
    };


    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">This is from</h1>

            <Form {...formItemLayout} onFinish={takeFormData}>
                <Form.Item
                    label="Fail"
                    validateStatus="error"
                    // onFieldsChange={()=>setInput(value)}
                    help="Should be combination of numbers & alphabets"
                >
                    <Input placeholder="unavailable choice" id="error" />
                </Form.Item>
                <p>{input}</p>

                <Form.Item label="Warning" validateStatus="warning">
                    <Input placeholder="Warning" id="warning" prefix={<SmileOutlined />} />
                </Form.Item>

                <Form.Item
                    label="Validating"
                    hasFeedback
                    validateStatus="validating"
                    help="The information is being validated..."
                >
                    <Input placeholder="I'm the content is being validated" id="validating" />
                </Form.Item>

                <Form.Item label="Success" hasFeedback validateStatus="success">
                    <Input placeholder="I'm the content" id="success" />
                </Form.Item>

                <Form.Item label="Warning" hasFeedback validateStatus="warning">
                    <Input placeholder="Warning" id="warning2" />
                </Form.Item>

                <Form.Item
                    label="Fail"
                    hasFeedback
                    validateStatus="error"
                    help="Should be combination of numbers & alphabets"
                >
                    <Input placeholder="unavailable choice" id="error2" />
                </Form.Item>

                <Form.Item label="Success" hasFeedback validateStatus="success">
                    <DatePicker
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item label="Warning" hasFeedback validateStatus="warning">
                    <TimePicker
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item label="Error" hasFeedback validateStatus="error">
                    <Select allowClear>
                        <Option value="1">Asim</Option>
                        <Option value="2">Bivor</Option>
                        <Option value="3">Jahid</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Validating"
                    hasFeedback
                    validateStatus="validating"
                    help="The information is being validated..."
                >
                    <Cascader
                        options={[
                            {
                                value: 'xx',
                                label: 'xx',
                            },
                        ]}
                        allowClear
                    />
                </Form.Item>

                <Form.Item
                    label="inline"
                    style={{
                        marginBottom: 0,
                    }}
                >
                    <Form.Item
                        validateStatus="error"
                        help="Please select the correct date"
                        style={{
                            display: 'inline-block',
                            width: 'calc(50% - 12px)',
                        }}
                    >
                        <DatePicker />
                    </Form.Item>
                    <span
                        style={{
                            display: 'inline-block',
                            width: '24px',
                            lineHeight: '32px',
                            textAlign: 'center',
                        }}
                    >
                        -
                    </span>
                    <Form.Item
                        style={{
                            display: 'inline-block',
                            width: 'calc(50% - 12px)',
                        }}
                    >
                        <DatePicker />
                    </Form.Item>
                </Form.Item>

                <Form.Item label="Success" hasFeedback validateStatus="success">
                    <InputNumber
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item label="Success" hasFeedback validateStatus="success">
                    <Input allowClear placeholder="with allowClear" />
                </Form.Item>

                <Form.Item label="Warning" hasFeedback validateStatus="warning">
                    <Input.Password placeholder="with input password" />
                </Form.Item>

                <Form.Item label="Error" hasFeedback validateStatus="error">
                    <Input.Password allowClear placeholder="with input password and allowClear" />
                </Form.Item>

                <Button type="primary" htmlType="submit" className="">
                    Submit
                </Button>

            </Form>
            <p>{input}</p>

        </div >
    );
};

export default Index;
