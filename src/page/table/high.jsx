import React, { Component } from "react";
import { Card, message, Modal, Table, Button, Badge } from 'antd'
import axios from "../.././axios/index";

export default class High extends Component {
    state = {
        page: 1
    }
    params = {
        page: 1
    }
    componentDidMount() {
        this.request()
    }
    request = () => {

        axios.ajax({
            url: '/table/high/list',
            data: {
                param: {
                    page: this.params.page
                },
                isShowLoading: false

            }
        }).then((res) => {
            if (res.code === 0) {
                res.result.list.map((item, index) => {
                    item.key = index
                })
                this.setState({
                    dataSource: res.result.list,



                })
            }
        })

    }
    handleDeleted = (item) => {

        Modal.confirm({
            title: "确认",
            content: "确定删除这个数据吗？",
            onOk: () => {
                message.success('删除成功');
                this.request()
            }
        })
    }
    handleChange = (pagination, filters, sorter) => {
        this.setState({
            sortOrder: sorter.order
        })
    }
    render() {
        const { dataSource } = this.state
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80,
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80,
            },
            {
                title: '性别', width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? "男" : "女"
                }
            },
            {
                title: '状态', width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        "1": "努力摸鱼",
                        "2": "努力摸虾",
                        "3": "亲亲我我",
                        "4": "不嫌害臊",
                        "5": "无敌教主",
                    }
                    return config[state]
                }
            },
            {
                title: '爱好', width: 80,
                dataIndex: 'interset',
                render(interset) {
                    let config = {
                        "1": "王者荣耀",
                        "2": "绝地求生",
                        "3": "英雄联盟",
                        "4": "穿越火线",
                        "5": "和平精英",
                    }
                    return config[interset]
                }
            },
            {
                title: '生日', width: 80,
                dataIndex: 'birthday'
            },
            {
                title: '地址 ', width: 150,
                dataIndex: 'address'
            },
            {
                title: '早起时间 ', width: 80,
                dataIndex: 'time'
            },

        ]
        const columns2 = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80,
                fixed: "left"
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80, fixed: "left"
            },
            {
                title: '性别', width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? "男" : "女"
                }
            },
            {
                title: '状态', width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        "1": "努力摸鱼",
                        "2": "努力摸虾",
                        "3": "亲亲我我",
                        "4": "不嫌害臊",
                        "5": "无敌教主",
                    }
                    return config[state]
                }
            },
            {
                title: '状态', width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        "1": "努力摸鱼",
                        "2": "努力摸虾",
                        "3": "亲亲我我",
                        "4": "不嫌害臊",
                        "5": "无敌教主",
                    }
                    return config[state]
                }
            },
            {
                title: '状态', width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        "1": "努力摸鱼",
                        "2": "努力摸虾",
                        "3": "亲亲我我",
                        "4": "不嫌害臊",
                        "5": "无敌教主",
                    }
                    return config[state]
                }
            },
            {
                title: '状态', width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        "1": "努力摸鱼",
                        "2": "努力摸虾",
                        "3": "亲亲我我",
                        "4": "不嫌害臊",
                        "5": "无敌教主",
                    }
                    return config[state]
                }
            },
            {
                title: '状态', width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        "1": "努力摸鱼",
                        "2": "努力摸虾",
                        "3": "亲亲我我",
                        "4": "不嫌害臊",
                        "5": "无敌教主",
                    }
                    return config[state]
                }
            },
            {
                title: '爱好', width: 80,
                dataIndex: 'interset',
                render(interset) {
                    let config = {
                        "1": "王者荣耀",
                        "2": "绝地求生",
                        "3": "英雄联盟",
                        "4": "穿越火线",
                        "5": "和平精英",
                    }
                    return config[interset]
                }
            },
            {
                title: '生日', width: 80,
                dataIndex: 'birthday'
            }, {
                title: '生日', width: 80,
                dataIndex: 'birthday'
            },
            {
                title: '生日', width: 80,
                dataIndex: 'birthday'
            },
            {
                title: '生日', width: 80,
                dataIndex: 'birthday'
            },
            {
                title: '生日', width: 80,
                dataIndex: 'birthday'
            },
            {
                title: '生日', width: 80,
                dataIndex: 'birthday'
            },
            {
                title: '生日', width: 80,
                dataIndex: 'birthday'
            }, {
                title: '生日', width: 80,
                dataIndex: 'birthday'
            },
            {
                title: '地址 ', width: 150,
                dataIndex: 'address',
                fixed: "right"
            },
            {
                title: '早起时间 ', width: 80,
                dataIndex: 'time',
                fixed: "right"
            },

        ]
        const columns3 = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80,
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80,
            },
            {
                title: '年龄', width: 80,
                dataIndex: 'age',
                sorter: (a, b) => {
                    return a.age - b.age;
                },
                sortOrder: this.state.sortOrder

            },
            {
                title: '性别', width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? "男" : "女"
                }
            },
            {
                title: '状态', width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        "1": "努力摸鱼",
                        "2": "努力摸虾",
                        "3": "亲亲我我",
                        "4": "不嫌害臊",
                        "5": "无敌教主",
                    }
                    return config[state]
                }
            },
            {
                title: '爱好', width: 80,
                dataIndex: 'interset',
                render(interset) {
                    let config = {
                        "1": "王者荣耀",
                        "2": "绝地求生",
                        "3": "英雄联盟",
                        "4": "穿越火线",
                        "5": "和平精英",
                    }
                    return config[interset]
                }
            },
            {
                title: '生日', width: 80,
                dataIndex: 'birthday'
            },
            {
                title: '地址 ', width: 150,
                dataIndex: 'address'
            },
            {
                title: '早起时间 ', width: 80,
                dataIndex: 'time'
            },

        ]
        const columns4 = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80,
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80,
            },
            {
                title: '年龄', width: 80,
                dataIndex: 'age',


            },
            {
                title: '性别', width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? "男" : "女"
                }
            },
            {
                title: '状态', width: 100,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        "1": <Badge text="努力摸鱼" status="success" />,
                        "2": <Badge text="努力摸虾" status="warning" />,
                        "3": <Badge text="亲亲我我" status="default" />,
                        "4": <Badge text="不嫌害臊" status="processing" />,
                        "5": <Badge text="无敌教主" status="error" />,
                    }
                    return config[state]
                }
            },
            {
                title: '爱好', width: 100,
                dataIndex: 'interset',
                render(interset) {
                    let config = {
                        "1": "王者荣耀",
                        "2": "绝地求生",
                        "3": "英雄联盟",
                        "4": "穿越火线",
                        "5": "和平精英",
                    }
                    return config[interset]
                }
            },
            {
                title: '生日', width: 100,
                dataIndex: 'birthday'
            },
            {
                title: '地址 ', width: 220,
                dataIndex: 'address'
            },
            {
                title: '早起时间 ', width: 80,
                dataIndex: 'time'
            },
            {
                title: '操作', width: 100,

                render: (text, item) => {
                    return <Button onClick={(item) => { this.handleDeleted(item) }}>删除</Button>
                }
            },

        ]
        return (
            <div className='card-warp' >
                <Card title="高级表格">
                    <Card title="头部固定表格">
                        <Table bordered
                            columns={columns}
                            pagination={false}
                            dataSource={dataSource}
                            scroll={{ y: 240 }}
                        />
                    </Card>
                    <Card title="左侧固定" style={{ margin: "10px 0px" }}>
                        <Table bordered
                            columns={columns2}
                            pagination={false}
                            dataSource={dataSource}
                            scroll={{ x: 1500 }}
                            scroll={{ y: 300 }}
                        />
                    </Card>
                    <Card title="排序" style={{ margin: "10px 0px" }}>
                        <Table bordered
                            columns={columns3}
                            pagination={false}
                            dataSource={dataSource}
                            // scroll={{ x: 1500 }}
                            scroll={{ y: 300 }}
                            onChange={this.handleChange}
                        />
                    </Card>
                    <Card title="操作按钮" style={{ margin: "10px 0px" }}>
                        <Table bordered
                            columns={columns4}
                            pagination={false}
                            dataSource={dataSource}
                            scroll={{ x: 1500 }}
                            scroll={{ y: 300 }}
                            onChange={this.handleChange}
                        />
                    </Card>
                </Card>
            </div>
        )
    }
}