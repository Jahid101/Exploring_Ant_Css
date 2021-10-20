import React from 'react';



import { Collapse, Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const { Option } = Select;

function callback(key) {
    console.log(key);
}

const text = `
6sense Technologies  
`;

const genExtra = () => (
    <SettingOutlined
        onClick={event => {
            // If you don't want click extra trigger collapse, you can prevent this:
            event.stopPropagation();
        }}
    />
);

class Index extends React.Component {
    state = {
        expandIconPosition: 'left',
    };

    onPositionChange = expandIconPosition => {
        this.setState({ expandIconPosition });
    };

    render() {
        const { expandIconPosition } = this.state;

        return (
            <div className="mh-50 mv-50">
                <h1 className="text-center underline">Collapse</h1>
                <Collapse
                    defaultActiveKey={['1']}
                    onChange={callback}
                    expandIconPosition={expandIconPosition}
                    style={{ backgroundColor: "goldenrod" }}
                >
                    <Panel header="Aasim" key="1" extra={genExtra()}>
                        <div>{text}</div>
                    </Panel>
                    <Panel header="Bivor" key="2" extra={genExtra()}>
                        <div>{text}</div>
                    </Panel>
                    <Panel header="Jahid Noob" key="3" extra={genExtra()}>
                        <div>{text}</div>
                    </Panel>
                </Collapse>
                <br />
                <span>Change Icon Position: </span>
                <Select
                    value={expandIconPosition}
                    style={{ margin: '0 8px' }}
                    onChange={this.onPositionChange}
                >
                    <Option value="left">left</Option>
                    <Option value="right">right</Option>
                </Select>
            </div>
        );
    }
}

export default Index;
