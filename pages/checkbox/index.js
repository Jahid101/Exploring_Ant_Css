import React from 'react';
import { Checkbox, Divider } from 'antd';



const Index = () => {

    const CheckboxGroup = Checkbox.Group;

    const plainOptions = ['NextJs', 'TypeScript', 'Ant Design', 'Less'];
    const defaultCheckedList = ['Ant Design', 'NextJs'];

    const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(false);

    const onChange = list => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Hi, I am Checkbox</h1>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                All done
            </Checkbox>
            <Divider>Divider here</Divider>
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
        </div>
    );
};

export default Index;
