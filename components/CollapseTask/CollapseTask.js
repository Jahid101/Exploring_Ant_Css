import React from 'react';
// import './index.less';
import { Collapse } from 'antd';
import { CaretRightOutlined, DownOutlined } from '@ant-design/icons';


const CollapseTask = () => {

    const { Panel } = Collapse;

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


    const data = [
        {
            id: "1",
            question: "Do i need linkedin Premium Account to Use breaking mars?",
            answer: "Since LinkedIn limits the number of your profile views and profile searches on a free account, you will need to upgrade to a paid LinkedIn account to fully benefit of Breaking Mars features. We recommend LinkedIn Sales Navigator as the filtering options are superior to LinkedIn Premium.",
            isOpen: false
        },
        {
            id: "2",
            question: "Can you automate LinkedIn connections?",
            answer: "Breaking Mars and other automation solutions allow you to auto-connect and send automated messages to your LinkedIn prospects with a single click of a button. Enter a person's profile name or import contacts from a CSV file. Set a daily restriction on the number of connection requests you can make. Make your message chains. Press the 'Publish' button. Allow your campaigns to operate in the background while you focus on other things.",
            isOpen: false
        },
        {
            id: "3",
            question: "Can i run breaking mars on multiple linkedin profiles?",
            answer: "Breaking Mars allows you to use multiple LinkedIn accounts. In the premium plan you can integrate upto 3 LinkedIn accounts.",
            isOpen: false
        },
        {
            id: "4",
            question: "How do I get emails addresses of my prospects using breaking Mars?",
            answer: "When you connect with someone on Breaking Mars, their email is automatically retrieved. To access it, download your data in CSV format via the Contact tab.",
            isOpen: false
        },
        {
            id: "5",
            question: "Is LinkedIn automation illegal?",
            answer: "LinkedIn automation is not illegal.However, if you use unreliable instruments, especially extensions, you put your account at risk of getting banned.To avoid LinkedIn Jail, make sure you use tools that limit the number of connections or let you control it. Opt for cloud-based tools rather than extensions.",
            isOpen: false
        },
    ]


    return (
        <div style={{
            margin: "5%",
        }}>
            <Collapse
                bordered={false}
                style={{ boxShadow: "gray 1px 1px 10px 10px"}}
                defaultActiveKey=""
                expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? -180 : 0} />}
            // className="site-collapse-custom-collapse"
            >
                {data.map((item, index) =>
                    <Panel
                        style={{ fontSize: "18px" }}
                        header={item.question}
                        key={item.id}
                        className="site-collapse-custom-panel"
                    >
                        <p
                            style={{ fontSize: "16px", marginLeft: "2.5%" }}
                        >
                            {item.answer}</p>

                    </Panel>
                )}
            </Collapse>
        </div>
    );
};

export default CollapseTask;
