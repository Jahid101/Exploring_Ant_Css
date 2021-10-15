// import 'antd/dist/antd.css'; 
import { Button, Col, Divider, Row, Space, Tooltip } from 'antd';
import React, { useState } from 'react';
import { Typography } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import Slider from '@ant-design/react-slick';
import { useRouter } from 'next/dist/client/router';

const { Header, Content } = Layout;




export default function Home() {

  const [size, setSize] = useState(8);

  const router = useRouter()

  const { page } = router.query

  const handleClick = (component) => {
    router.push(`/${component}`);
  }



  return (
    <div className="ph-30 pv-30">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            {new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              const sense = ["", "button", "icon", "typography", "divider", "grid", "layout", "space", "affix", "breadcrumb", "dropdown", "menu", "pageHeader", "pagination", "steps"]
              return <Menu.Item
                onClick={() => handleClick(sense[key])}
                key={key}
              >
                {sense[key]}
              </Menu.Item>;
            })}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{page}</Breadcrumb.Item>
            {/* <Breadcrumb.Item>Asim Vai</Breadcrumb.Item>
                <Breadcrumb.Item>Bivor Vai</Breadcrumb.Item>
                <Breadcrumb.Item>Jahid</Breadcrumb.Item> */}
          </Breadcrumb>
          <div className="site-layout-content">Exploring Ant Css</div>
        </Content>
      </Layout>
    </div>
  )
}
