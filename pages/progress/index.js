import React from 'react';
import { Progress, Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';


class Index extends React.Component {
    state = {
        percent: 0,
    };

    increase = () => {
        let percent = this.state.percent + 10;
        if (percent > 100) {
            percent = 100;
        }
        this.setState({ percent });
    };

    decline = () => {
        let percent = this.state.percent - 10;
        if (percent < 0) {
            percent = 0;
        }
        this.setState({ percent });
    };



    render() {
        return (
            <div className="mh-50 mv-50">
                <h1 className="text-center underline">Progress</h1>

                <Progress percent={this.state.percent} />
                <div className="text-center">
                    <Button.Group>
                        <Button onClick={this.decline} icon={<MinusOutlined />} />
                        <Button onClick={this.increase} icon={<PlusOutlined />} />
                    </Button.Group>

                    <br />
                    <br />
                    <Progress type="circle" percent={this.state.percent} />
                </div>
            </div>
        );
    }
}


export default Index;
