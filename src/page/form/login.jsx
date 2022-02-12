import React, { Component } from "react";
import { Card, Form, Input, Button, message, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const FormItem = Form.Item
export default class Login extends Component {
    handleSubmit = async () => {
        let useInfo = this.myForm.getFieldlsValue();
        console.log(useInfo)
        try {
            const values = await this.myForm.validateFields(['username', 'password']);
            console.log(values);
            message.success(`${useInfo.username}恭喜你，您通过本次表单学习，您的密码为${useInfo.password}`)
        } catch (errorInfo) {
            console.log(errorInfo);
        }
    }
    onFinish = values => {
        message.success(`${values.username}恭喜你，您通过本次表单学习，您的密码为${values.password}`)
    };
    render() {
        return (
            <div className="card-warp">
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单1">
                    <Form style={{ width: "300px" }} onFinish={this.onFinish} >
                        <FormItem name="userName"
                            rules={
                                [
                                    {
                                        required: true,
                                        message: "用户名不能是空"
                                    },
                                    {
                                        min: 5, max: 15,
                                        message: '不咋长度范围内'
                                    }, {
                                        pattern: new RegExp('^\\w+$', 'g'),
                                        message: '用户名必须为字母或数字'
                                    }
                                ]
                            }
                        >
                            <Input prefix={<UserOutlined className="username" />} placeholder="请输入用户名" />
                        </FormItem>
                        <Form.Item
                            name="password"
                        >
                            <Input prefix={<LockOutlined className="username" />} placeholder="请输入用户名" />
                        </Form.Item>
                        <FormItem>
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                initialValue={true}
                                style={{ float: 'left' }}
                            >
                                <Checkbox>记住密码</Checkbox>
                            </Form.Item>
                            <a href="#" style={{ float: 'right' }}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type='primary' htmlType="submit">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单2">
                    <Form style={{ width: "300px" }} ref={c => this.myForm = c} >
                        <FormItem name="userName"
                            rules={
                                [
                                    {
                                        required: true,
                                        message: "用户名不能是空"
                                    },
                                    {
                                        min: 5, max: 15,
                                        message: '不咋长度范围内'
                                    }, {
                                        pattern: new RegExp('^\\w+$', 'g'),
                                        message: '用户名必须为字母或数字'
                                    }
                                ]
                            }
                        >
                            <Input prefix={<UserOutlined className="username" />} placeholder="请输入用户名" />
                        </FormItem>
                        <Form.Item
                            name="password"
                        >
                            <Input prefix={<LockOutlined className="username" />} placeholder="请输入用户名" />
                        </Form.Item>
                        <FormItem>
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                initialValue={true}
                                style={{ float: 'left' }}
                            >
                                <Checkbox>记住密码</Checkbox>
                            </Form.Item>
                            <a href="#" style={{ float: 'right' }}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type='primary' onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
