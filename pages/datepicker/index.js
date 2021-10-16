import React from 'react';
import { DatePicker, Space } from 'antd';
import moment from 'moment';



const Index = () => {

    const { RangePicker } = DatePicker;

    // const[date, setDate] = React.useState(null)

    function onChange(dates, dateStrings) {
        console.log('From: ', dates[0], ', to: ', dates[1]);
        console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    }
    // console.log(date)



    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Lets select schedule for our work</h1>
            <Space direction="vertical" size={12}>
                <RangePicker
                    ranges={{
                        Today: [moment(), moment()],
                        'This Month': [moment().startOf('month'), moment().endOf('month')],
                    }}
                    onChange={onChange}
                />
                {/* <h2>Selected Date: {date}</h2> */}

                <br />
                <h3> lets select a Date with time</h3>
                <RangePicker
                    ranges={{
                        Today: [moment(), moment()],
                        'This Month': [moment().startOf('month'), moment().endOf('month')],
                    }}
                    showTime
                    format="YYYY/MM/DD HH:mm:ss"
                    onChange={onChange}
                />
            </Space>
        </div>
    );
};

export default Index;
