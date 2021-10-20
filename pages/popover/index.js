import React from 'react';
import { Popover, Button } from 'antd';

class Index extends React.Component {
    state = {
        clicked: false,
        hovered: false,
    };

    hide = () => {
        this.setState({
            clicked: false,
            hovered: false,
        });
    };

    handleHoverChange = visible => {
        this.setState({
            hovered: visible,
            clicked: false,
        });
    };

    handleClickChange = visible => {
        this.setState({
            clicked: visible,
            hovered: false,
        });
    };

    render() {
        const hoverContent = <div>6sense Technologies</div>;
        const clickContent = <div>Aasim, Bivor, Jahid</div>;
        return (
            <div className="mh-50 mv-50">
                <h1 className="text-center underline">Popover</h1>

                <Popover
                    style={{ width: 500 }}
                    content={hoverContent}
                    title="Company"
                    trigger="hover"
                    visible={this.state.hovered}
                    onVisibleChange={this.handleHoverChange}
                >
                    <Popover
                        content={
                            <div>
                                {clickContent}
                                <a onClick={this.hide}>Close</a>
                            </div>
                        }
                        title="Developer"
                        trigger="click"
                        visible={this.state.clicked}
                        onVisibleChange={this.handleClickChange}
                    >
                        <Button>Hover and click</Button>
                    </Popover>
                </Popover>
            </div>
        );
    }
};

export default Index;
