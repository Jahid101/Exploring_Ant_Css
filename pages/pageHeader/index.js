import React from 'react';
import { PageHeader, Tabs, Button, Statistic, Descriptions } from 'antd';
import { useRouter } from 'next/dist/client/router';
import AnchorLink from 'antd/lib/anchor/AnchorLink';

const { TabPane } = Tabs;



const Index = () => {

    const { router } = useRouter()

    const renderContent = (column = 2) => (
        <Descriptions size="small" column={column}>
            <Descriptions.Item label="Created">
                <span style={{ color: 'blue', fontSize: '17px' }}>Jahid</span>
            </Descriptions.Item>
            <Descriptions.Item label="Company">
                <a style={{ color: 'green', fontSize: '17px' }}>6sense Technologies</a>
            </Descriptions.Item>
            <Descriptions.Item label="Creation Time">2021-10-15</Descriptions.Item>
            <Descriptions.Item label="Effective Time">2021-10-15</Descriptions.Item>
            <Descriptions.Item label="Remarks">
                <span style={{ color: 'goldenrod', fontWeight: 'bold' }}>NextJs, TypeScript, Ant Css, LESS, Redux</span>
            </Descriptions.Item>
        </Descriptions>
    );

    const extraContent = (
        <div
            style={{
                display: 'flex',
                width: 'max-content',
                justifyContent: 'flex-end',
            }}
        >
            <Statistic
                title="Designation"
                value="Frontend(Junior)"
                style={{
                    marginRight: 32,
                }}
            />
            <Statistic title="Target" prefix="Full " value="Stack(Senior)" />
        </div>
    );

    const Content = ({ children, extra }) => (
        <div className="content">
            <div className="main">{children}</div>
            <div className="extra">{extra}</div>
        </div>
    );




    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">I am Page header</h1>
            <PageHeader
                className="site-page-header-responsive"
                onBack={() => window.history.back()}
                title="Title"
                subTitle="This is a subtitle"
                extra={[
                    <Button key="3">not working</Button>,
                    <Button key="2">up coming</Button>,
                    <Button key="1" type="primary">
                        wait
                    </Button>,
                ]}
                footer={
                    < Tabs defaultActiveKey="1" >
                        <TabPane tab="Details" key="1" />
                        <TabPane tab="Rule" key="2" />
                    </Tabs >
                }
            >
                <Content extra={extraContent}>{renderContent()}</Content>
            </PageHeader >
        </div >
    );
};

export default Index;