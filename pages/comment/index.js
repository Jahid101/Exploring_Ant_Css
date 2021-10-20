import React from 'react';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Make a Comment
            </Button>
        </Form.Item>
    </>
);


class Index extends React.Component {
    state = {
        comments: [],
        submitting: false,
        value: '',
    };

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        setTimeout(() => {
            this.setState({
                submitting: false,
                value: '',
                comments: [
                    ...this.state.comments,
                    {
                        author: 'Noob',
                        avatar: 'https://joeschmoe.io/api/v1/random',
                        content: <p>{this.state.value}</p>,
                        datetime: moment().fromNow(),
                    },
                ],
            });
        }, 1000);
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const { comments, submitting, value } = this.state;

        return (
            <div className="mh-50 mv-50">
            <h1 className="text-center underline">Comment</h1>
                {comments.length > 0 && <CommentList comments={comments} />}
                <Comment
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Noob" />}
                    content={
                        <Editor
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            submitting={submitting}
                            placeholder="comment here"
                            value={value}
                        />
                    }
                />
            </div>
        );
    }
}

export default Index;
