import React, { Component } from "react";
import { Card, message, Modal, Table, Button } from 'antd'
import axios from "../.././axios/index";
import Utils from '../../utils/utils'
export default class Basic extends Component {
    state = {
        dataSource2: []
    }
    params = {
        page: 1
    }
    componentDidMount() {
        const dataSource = [
            {
                id: '0',
                userName: "tom",
                sex: "1",
                state: "1",
                interset: "1",
                birthday: "2022-02-01",
                address: "北京市海淀区奥林匹克委员会",
                time: "09:00"
            },
            {
                id: '1',
                userName: "jarray",
                sex: "1",
                state: "1",
                interset: "1",
                birthday: "2022-02-01",
                address: "北京市海淀区奥林匹克委员会",
                time: "09:00"
            },
            {
                id: '2',
                userName: "susan",
                sex: "1",
                state: "1",
                interset: "1",
                birthday: "2022-02-01",
                address: "北京市海淀区奥林匹克委员会",
                time: "09:00"
            }
        ]
        dataSource.map((item, index) => {
            item.key = index
        })
        this.setState({
            dataSource
        })
        this.request();
    }
    //动态获取mock数据
    request = () => {
        let _this = this
        axios.ajax({
            url: '/table/list',
            data: {
                param: {
                    page: this.params.page
                },
                // isShowLoading: false

            }
        }).then((res) => {
            if (res.code === 0) {
                res.result.list.map((item, index) => {
                    item.key = index
                })
                this.setState({
                    dataSource2: res.result.list,
                    selectedRowKeys: [],
                    selectedRows: null,
                    pagination: Utils.pagination(res, (current) => {
                        _this.params.page = current
                        this.request();
                    })

                })
            }
        })

    }
    onRowClick = (record, index) => {
        Modal.info({
            title: "信息",
            content: `用户名：${record.userName},用坏爱好：${record.interset}`
        })
        let selectKey = [index];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }
    handleDelete = () => {
        let rows = this.state.selectedRows;
        console.log("rows", rows)
        let ids = [];
        rows.map((item) =>
            ids.push(item.id)
        )
        Modal.confirm({
            title: "删除提示",
            content: `你确定要删除这些数据吗？${ids.join(',')}`,
            onOk: () => {
                message.success('删除成功')
                this.request();
            }
        })
    }
    render() {
        const { dataSource, dataSource2, selectedRowKeys, pagination } = this.state
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? "男" : "女"
                }
            },
            {
                title: '状态',
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
                title: '爱好',
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
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址 ',
                dataIndex: 'address'
            },
            {
                title: '早起时间 ',
                dataIndex: 'time'
            },

        ]

        const rowSelection = {
            type: "radio",
            selectedRowKeys
        }
        const rowCheckSelection = {
            type: "checkbox",
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                let ids = []
                console.log("selectedRows", selectedRows)
                selectedRows.map((item) => {
                    ids.push(item.id)
                })
                this.setState({
                    selectedRowKeys,
                    selectedIds: ids,
                    selectedRows
                })
            }
        }
        return (
            <div className="card-warp">
                <Card title="基础表格">
                    <Table bordered
                        columns={columns}
                        pagination={false}
                        dataSource={dataSource} />
                </Card>
                <Card title="动态数据渲染表格" style={{ margin: "10px 0px" }}>
                    <Table bordered
                        columns={columns}
                        pagination={false}
                        dataSource={dataSource2} />
                </Card>
                <Card title="Mock-单选功能" style={{ margin: "10px 0px" }}>
                    <Table bordered
                        columns={columns}
                        rowSelection={rowSelection}
                        pagination={false}
                        dataSource={dataSource2}
                        onRow={
                            (record, index) => {
                                return {
                                    onClick: () => {
                                        this.onRowClick(record, index)
                                    }
                                }
                            }
                        }

                    />
                </Card>
                <Card title="Mock-复选" className='card-wrap'>
                    <div style={{ marginBottom: 10 }}>
                        <Button onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={dataSource2}
                        pagination={false}
                        rowSelection={rowCheckSelection}
                    />
                </Card>
                <Card title="Mock-分页" className='card-wrap'>

                    <Table
                        bordered
                        columns={columns}
                        dataSource={dataSource2}
                        pagination={pagination}
                    />
                </Card>
            </div>
        )
    }
}