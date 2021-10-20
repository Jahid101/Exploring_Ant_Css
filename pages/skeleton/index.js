import React from 'react';
import { Skeleton, Switch, List, Avatar } from 'antd';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';

const listData = [];
for (let i = 0; i < 3; i++) {
    listData.push({
        href: 'https://ant.design',
        title: `Noob 10${i}`,
        avatar: 'https://joeschmoe.io/api/v1/random',
        description:
            'kasdhka ahd auih kauidh aiudh paiud ao;i da; kdj.',
        content:
            'akljsdh b djsh o;aidj o;aid a;oi jn9 aoiw a asd .',
    });
}

const IconText = ({ icon, text }) => (
    <span>
        {React.createElement(icon, { style: { marginRight: 8 } })}
        {text}
    </span>
);

class Index extends React.Component {
    state = {
        loading: true,
    };

    onChange = checked => {
        this.setState({ loading: !checked });
    };

    render() {
        const { loading } = this.state;

        return (
            <div className="mh-50 mv-50">
                <h1 className="text-center underline">Skeleton</h1>

                <Switch checked={!loading} onChange={this.onChange} />

                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={
                                !loading && [
                                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                ]
                            }
                            extra={
                                !loading && (
                                    <img
                                        width={272}
                                        alt="logo"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                    />
                                )
                            }
                        >
                            <Skeleton loading={loading} active avatar>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<a href={item.href}>{item.title}</a>}
                                    description={item.description}
                                />
                                {item.content}
                            </Skeleton>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default Index;
