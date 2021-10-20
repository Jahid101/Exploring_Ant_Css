// import 'antd/dist/antd.css'; 
import { Button, Col, Divider, Row, Space, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import Slider from '@ant-design/react-slick';
import { useRouter } from 'next/dist/client/router';

const { Header, Content } = Layout;




export default function Home() {

  const [size, setSize] = useState(8);

  const router = useRouter()
  // const { page } = router.query

  const handleClick = (component) => {
    router.push(`/${component}`);
  }

  // const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   fetch(`https://app.firstbase.io/company/OR242941/rewards`)
  //     .then(res => res.json())
  //     .then(data => setProduct(data))
  // }, [])
  // console.log(product);



  return (
    <div className="ph-30 pv-30">
      <h1 className="text-center underline">Exploring Ant Design</h1>

      <Layout className="layout">
        <h1 className="text-center">Session: 01</h1>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
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


        <br />
        <h1 className="text-center">Session: 02</h1>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
            {new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              const sense = ["", "autoComplete", "cascader", "checkbox", "datepicker", "form", "input", "inputNumber", "mention", "radio", "rate", "select", "slider", "switch", "timePicker", "transfer"]
              return <Menu.Item
                onClick={() => handleClick(sense[key])}
                key={key}
              >
                {sense[key]}
              </Menu.Item>;
            })}
          </Menu>
        </Header>


        <br />
        <h1 className="text-center">Session: 03</h1>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
            {new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              const sense = ["", "treeSelect", "upload", "avatar", "badge", "form", "input", "inputNumber", "mention", "radio", "rate", "select", "slider", "switch", "timePicker", "transfer"]
              return <Menu.Item
                onClick={() => handleClick(sense[key])}
                key={key}
              >
                {sense[key]}
              </Menu.Item>;
            })}
          </Menu>
        </Header>
        {/* <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{page}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">Exploring Ant Css</div>
        </Content> */}
      </Layout>
    </div>
  )
}
