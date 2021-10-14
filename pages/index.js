import 'antd/dist/antd.css';
import Index from './Components/AntCss/index';
import AntCss from './Components/AntCss/index'
import { Button, Col, Divider, Row, Space, Tooltip } from 'antd';
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
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;




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

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <Divider plain>Text</Divider>
          <p>
            Lorem ipsum dolor sit amet
          </p>
          <Divider orientation="left">Left Text</Divider>
          <p>
            Lorem ipsum dolor sit amet
          </p>
          <Divider orientation="right" plain>Right Text</Divider>
          <p>
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>

        <div>
          <Divider orientation="left">sub-element align full</Divider>
          <Row justify="space-around" style={{ backgroundColor: "gray" }}>
            <Col style={{ backgroundColor: "red" }} span={4}>col-4</Col>
            <Col style={{ backgroundColor: "red" }} span={4}>col-4</Col>
            <Col style={{ backgroundColor: "red" }} span={4}>col-4</Col>
            <Col style={{ backgroundColor: "red" }} span={4}>col-4</Col>
          </Row>

          <Divider orientation="left" plain>Lets go</Divider>
          <Row justify="space-around" style={{ backgroundColor: "gray" }}>
            <Col style={{ backgroundColor: "red" }} span={4}>col-4</Col>
            <Col style={{ backgroundColor: "red" }} span={4}>col-4</Col>
            <Col style={{ backgroundColor: "red" }} span={4}>col-4</Col>
            <Col style={{ backgroundColor: "red" }} span={4}>col-4</Col>
          </Row>
        </div>


        <div>
          <Layout className="layout">
            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                {new Array(15).fill(null).map((_, index) => {
                  const key = index + 1;
                  return <Menu.Item key={key}>{`Asim`}</Menu.Item>;
                })}
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Asim Vai</Breadcrumb.Item>
                <Breadcrumb.Item>Bivor Vai</Breadcrumb.Item>
                <Breadcrumb.Item>Jahid</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-content">Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </div>


      </>
    </div>
  )
}
