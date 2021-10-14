import 'antd/dist/antd.css';
import Index from './Components/AntCss/index';
import AntCss from './Components/AntCss/index'
import { Button, Space, Tooltip } from 'antd';
import React, { useState } from 'react';
import { PoweroffOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';
import { DownloadOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { Switch } from 'antd';
const { Paragraph, Text } = Typography;

const { Title } = Typography;
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  TrophyTwoTone,
  PlayCircleOutlined,
  LoadingOutlined,
  PlusCircleTwoTone,
  PlayCircleFilled
} from '@ant-design/icons';




export default function Home() {


  
  return (
    <div className="">
      <h1 className="">Exploring Ant Css</h1>
      <>

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

        {/* Search Button */}
        <div>
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} size="large" />
          </Tooltip>
          <Tooltip title="search here">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} size="large" />
          </Tooltip>
        </div>

        {/* Download Button */}
        <div>
          <br />
          <Button type="link">
            Link
          </Button>


          <Button type="primary" shape="round" icon={<DownloadOutlined />} />
        </div>

        <div className="site-button-ghost-wrapper">
          <Button type="primary" ghost>
            Primary
          </Button>
          <Button ghost>Default</Button>
          <Button type="dashed" ghost>
            Dashed
          </Button>
        </div>

        <div className="icons-list">
          <HomeOutlined />
          <SyncOutlined spin />
          <SmileOutlined rotate={180} />
          <LoadingOutlined />

          <PlusCircleTwoTone />
          <PlayCircleOutlined />
          <TrophyTwoTone />
          <PlayCircleFilled />
        </div>,

        <Title level={2}>Hi there</Title>

        <div>
          <Title>h1. Ant Design</Title>
          <Title level={2}>h2. Ant Design</Title>
          <Title level={3}>h3. Ant Design</Title>
          <Title level={4}>h4. Ant Design</Title>
          {/* <Title level={5}>h5. Ant Design</Title> */}
        </div>
      </>
    </div>
  )
}
