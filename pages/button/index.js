import { DownloadOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Divider, Tooltip } from 'antd';
import React from 'react';
// import 'antd/dist/antd.css'; 



const index = () => {

    return (
        <div className="mv-50 mh-50">
            {/* Normal button */}
            <div>
                <Button type="primary" danger>
                    Primary
                </Button>
                <Button danger>Default</Button>
                <Button type="dashed" danger>
                    Dashed
                </Button>
                <Button type="text" danger>
                    Text
                </Button>
                <Button type="link" danger>
                    Link
                </Button>
            </div>

            <Divider orientation="right" plain> I am in right</Divider>

            {/* Search Button */}
            <div>
                <Tooltip title="search">
                    <Button shape="circle" icon={<SearchOutlined />} size="large" />
                </Tooltip>
                <Tooltip title="search here">
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} size="large" />
                </Tooltip>
            </div>

            <Divider orientation="center" plain> I am in center</Divider>

            {/* Download Button */}
            <div>
                <br />
                <Button type="link">
                    Link
                </Button>

                <Button type="primary" shape="round" icon={<DownloadOutlined />} />
            </div>

            <Divider orientation="left" plain> I am in left</Divider>

            <div className="site-button-ghost-wrapper">
                <Button type="primary" ghost>
                    Primary
                </Button>
                <Button style={{ color: "red" }} ghost>I am ghost</Button>
                <Button style={{ color: "green" }} type="dashed" ghost>
                    I am dashed ghost
                </Button>
            </div>
        </div>
    );
};

export default index;
