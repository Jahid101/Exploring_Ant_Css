import React from 'react';
import { Menu, Dropdown, Button } from 'antd';

const index = () => {

    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="">
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>

// overlay={menu}


    return (
        <div>
            <h1 className="mv-50 mh-50">Dropdown</h1>
            <Dropdown overlay={menu} placement="bottomLeft" arrow>
                <Button>bottomLeft</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
                <Button>bottomCenter</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="bottomRight" arrow>
                <Button>bottomRight</Button>
            </Dropdown>
            <br />
            <Dropdown overlay={menu} placement="topLeft" arrow>
                <Button>topLeft</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topCenter" arrow>
                <Button>topCenter</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topRight" arrow>
                <Button>topRight</Button>
            </Dropdown>
        </div>
    );
};

export default index;