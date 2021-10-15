import React from 'react';
import { Breadcrumb, Menu } from 'antd';


const index = () => {

    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="">
                    General
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="">
                    Layout
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="">
                    Navigation
                </a>
            </Menu.Item>
        </Menu>
    );



    return (
        <div className="mv-50 mh-50">
            <h1 className="underline text-center">Breadcrumb</h1>
            <Breadcrumb>
                <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Component</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item overlay={menu}>
                    <a href="">General</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
};

export default index;
