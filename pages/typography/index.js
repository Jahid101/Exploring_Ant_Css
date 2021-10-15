import { Divider, Typography } from 'antd';
const { Title } = Typography;

const index = () => {

    return (
        <div className="mh-50 mv-50">
            <Title level={1} className="text-center">Typography</Title>

            <Divider orientation="center" plain>I am a Divider</Divider>
            <Title style={{ color: 'blue' }}>I am h1</Title>
            <Title style={{ color: 'red' }} level={2}>I am h2</Title>
            <Title style={{ color: 'purple' }} level={3}>I am h3</Title>
            <Title style={{ color: 'green' }} level={4}>I am h4</Title>
            <Title style={{ color: 'goldenrod' }} level={5}>I am h5</Title>
        </div>
    );
};

export default index;