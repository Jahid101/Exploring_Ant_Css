import { Divider, Typography } from 'antd';
const { Title } = Typography;

const index = () => {

    return (
        <div className="mh-50 mv-50">
            <Title level={1} className="text-center">Typography</Title>

            <Divider orientation="center" plain>I am a Divider</Divider>
            <Title>I am h1</Title>
            <Title level={2}>I am h2</Title>
            <Title level={3}>I am h3</Title>
            <Title level={4}>I am h4</Title>
            <Title level={5}>I am h5</Title>
        </div>
    );
};

export default index;