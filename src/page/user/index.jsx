import React, { Component } from "react";
import { Card, Button, Modal, Form, Input, Radio, Select, DatePicker } from 'antd'
import axios from '../../axios/index1'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Utils from '../../utils/utils'
import moment from 'moment';
import BaseForm from '../../components/BaseForm/index'
import ETable from '../../components/ETable/index'
const { Option } = Select;
const { TextArea } = Input;
export default class User extends Component {
    state = {
        isVisible: false
    }
    params = {
        page: 1
    }

    formList = [
        {
            type: "INPUT",
            label: "用户名",
            filed: 'user_name',
            placeholder: '请输入用户名',
            width: 140
        },
        {
            type: "INPUT",
            label: "手机号",
            filed: 'user_mobile',
            placeholder: '请输入手机号',
            width: 140
        },
        {
            type: "DATE",
            label: "请选择入职日期",
            filed: 'user_date',
            placeholder: '请输入日期',
            width: 140
        },
    ]
    componentDidMount() {

        this.requestList();

    }

    requestList = () => {
        let _this = this
        axios.ajax({
            url: '/user/list',
            data: {
                params: this.params
            }
        }).then((res) => {
            this.setState({
                list: res.result.item_list.map((item, index) => {
                    item.key = index;
                    return item;
                }),
                pagination: Utils.pagination(res, (current) => {
                    _this.params.page = current;
                    console.log(current)
                    _this.requestList();
                })
            })
        })

    }
    handleFilter = (params) => {
        this.params = params
        this.requestList();
    }

    handleOperate = type => {
        let item = this.state.selectedItem;
        if (type === 'create') {
            this.setState({
                type,
                title: "创建员工",
                isVisible: true
            })
        } else if (type === 'edit') {
            if (!item) {
                Modal.info({
                    title: '提示',
                    content: '请选择一个用户'
                })
                return
            }
            this.setState({
                type,
                title: "编辑员工",
                isVisible: true,
                userInfo: item
            })
        } else if (type === "detail") {
            if (!item) {
                Modal.info({
                    title: '提示',
                    content: '请选择一个用户'
                })
                return
            }
            this.setState({
                type,
                title: "员工详情",
                isVisible: true,
                userInfo: item
            })
        } else {
            if (!item) {
                Modal.info({
                    title: '提示',
                    content: '请选择一个用户'
                })
                return
            }
            Modal.confirm({
                title: "确认删除",
                content: "是否要删除当前选中的员工",
                onOk: () => {
                    axios.ajax({
                        url: "/user/delete",
                        data: {
                            params: {
                                id: item.id
                            }
                        }
                    }).then(res => {
                        if (res.code === '0') {
                            this.setState({
                                isVisible: false,
                                selectedRowKeys: []
                            })
                            this.requestList();
                        }
                    })
                }
            })
        }
    }

    //创建员工
    handleSubmit = () => {
        let type = this.state.type;
        let userInfo = this.userForm.userForm.getFieldsValue();
        console.log("qwe");
        console.log("userInfo", userInfo);
        axios.ajax({
            url: type === "create" ? "/user/add" : "/user/edit",
            data: {
                params: userInfo
            }
        }).then(res => {
            if (res.code === '0') {
                this.setState({
                    isVisible: false
                })
                this.requestList();
                // this.userForm.userForm.resetFields();
            }
        })
    }
    render() {
        const { selectedRowKeys } = this.state
        const columns = [
            {
                title: "编号",
                dataIndex: "id",
            },
            {
                title: "用户名",
                dataIndex: "username",
            },
            {
                title: "性别",
                dataIndex: "sex",
                render(sex) {
                    return sex === 1 ? "男" : "女"
                }
            }, {
                title: "状态",
                dataIndex: "state",
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: "爱好",
                dataIndex: "interest",
                render(interest) {
                    return {
                        '1': "跑步",
                        '2': "跳舞",
                        '3': "唱歌",
                        '4': "打台球",
                        '5': "打羽毛球",
                        '6': "踢足球",
                        '7': "爬山",
                        '8': "骑行",
                    }[interest]
                }
            },
            {
                title: "婚否",
                dataIndex: "isMarried",
                render(isMarried) {
                    return isMarried === 1 ? "是" : "否"
                }
            },
            {
                title: "生日",
                dataIndex: "birthday",
            },
            {
                title: "联系地址",
                dataIndex: "address",
            }, {
                title: "早起时间",
                dataIndex: "time",
            },
        ]

        return (
            <div className='card-warp'>
                <Card className="card-warp">
                    <BaseForm formList={this.formList} />
                </Card>
                <Card title="订单详情" style={{ marginTop: 10 }}>
                    <Button icon={<PlusOutlined />} onClick={() => { this.handleOperate('create') }} type="primary" >创建员工</Button>
                    <Button icon={<EditOutlined />} onClick={() => { this.handleOperate('edit') }} type="primary" >编辑员工</Button>
                    <Button type="primary" onClick={() => { this.handleOperate('detial') }} >员工详情</Button>
                    <Button type="primary" onClick={() => { this.handleOperate('delete') }} icon={<DeleteOutlined />}>删除员工</Button>


                </Card>
                <div >
                    <ETable
                        updateSelectedItem={Utils.updateSelectedItem.bind(this)}
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                        selectedRowKeys={selectedRowKeys}
                        // selectedIds={this.state.selectedIds}
                        selectedItem={this.state.selectedItem}
                    />

                </div>
                <Modal title={this.state.title}
                    isVisible={this.state.isVisible}
                    onOk={this.handleSubmit}
                    onCancel={() => {
                        this.userForm.userForm.resetFields();
                        this.setState({
                            isVisible: false
                        })
                    }}
                    width={600}
                >
                    <UserForm
                        type={this.state.type}
                        ref={c => { this.userForm = c }}
                        userInfo={this.state.userInfo}
                    />
                </Modal>
            </div>
        )
    }
}
class UserForm extends Component {
    getState = state => {
        return {
            "1": "咸鱼一条",
            "2": "风华浪子",
            "3": "北大才子一枚",
            "4": "百度FE",
            "5": "创业者",
        }[state]
    }


    render() {
        let { type, userInfo } = this.props;
        const formItemLayout = {
            labelCol: {
                span: 5
            },
            wrapperCol: {
                span: 19
            }
        }
        return (
            <Form {...formItemLayout} ref={c => this.userForm = c}>
                <Form.Item label="用户名" name="userName" initialValue={userInfo.username}>
                    {
                        type === "detail" ? userInfo.username :
                            <Input placeholder="请输入姓名" />
                    }
                </Form.Item>
                <Form.Item label="性别" name="sex" initialValue={userInfo.sex}>
                    {
                        type === "detail" ? userInfo.sex === 1 ? "男" : "女" :
                            <Radio.Group>
                                <Radio value={1}>男</Radio>
                                <Radio value={2}>女</Radio>
                            </Radio.Group>
                    }
                </Form.Item>
                <Form.Item label="状态" name="state" initialValue={userInfo.state}>
                    {
                        type === "detail" ? this.getState(userInfo.state) :
                            <Select>
                                <Option value={1}>咸鱼一条</Option>
                                <Option value={2}>风华浪子</Option>
                                <Option value={3}>北大才子</Option>
                                <Option value={4}>百度FE</Option>
                                <Option value={5}>创业者</Option>
                            </Select>
                    }
                </Form.Item>
                <Form.Item label="生日" name='birthday' initialValue={moment(userInfo.birthday)}>
                    {
                        type === "detail" ? userInfo.birthday :
                            <DatePicker />
                    }
                </Form.Item>
                <Form.Item label="地址" name='address' initialValue={userInfo.address}>
                    {
                        type === "detail" ? userInfo.address :
                            <TextArea rows={3} placeholder="请输入联系地址" />
                    }
                </Form.Item>
            </Form>
        )
    }
}

