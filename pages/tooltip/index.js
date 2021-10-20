import React from 'react';
import { Tooltip, Button, Divider } from 'antd';


const tooltip = () => {

    const colors = [
        'pink',
        'red',
        'yellow',
        'orange',
        'cyan',
        'green',
        'blue',
        'purple',
        'geekblue',
        'magenta',
        'volcano',
        'gold',
        'lime',
    ];


    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Tooltips</h1>

            <div>
                {colors.map(color => (
                    <Tooltip title="prompt text" color={color} key={color}>
                        <Button>{color}</Button>
                    </Tooltip>
                ))}
            </div>

        </div>
    );
};

export default tooltip;
