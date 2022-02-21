import React, { Component } from 'react'
import { Card, Button, Form, Modal, message } from 'antd'
import axios from '../../axios/index1'

import BaseForm from '../../components/BaseForm/index'
import Utils from '../../utils/utils'
import ETable from '../../components/ETable/index'
export default class Order extends Component {
    state = {
        orderConfirmVisible: false,
        orderInfo: {},
        selectedRowKeys: []
    }
    params = { page: 1 }
    formList = [
        {
            type: 'SELECT',
            label: '城市',
            field: 'city',
            placeholder: '全部',
            initialValue: '0',
            width: 100,
            list: [
                { id: '0', name: '全部' },
                { id: '1', name: '北京市' },
                { id: '2', name: '哈尔滨市' },
                { id: '3', name: '绥化市' },
            ]
        },
        {
            type: '时间查询',
            width: 140

        },
        {
            type: 'SELECT',
            label: '订单状态',
            field: 'order_status',
            placeholder: '全部',
            initialValue: '0',
            width: 100,
            list: [
                { id: '0', name: '全部' },
                { id: '1', name: '进行中' },
                { id: '2', name: '结束行程' },
            ]
        },

    ]
    componentDidMount() {
        this.requestList()
    }
    //确认订单
    handleComfirm = () => {
        let item = this.state.selectedItem;
        if (!item) {
            Modal.info({
                title: "获取信息失败",
                content: "请选择一条订单进行结束"
            })
            return
        }
        axios.ajax({
            url: '/order/ebike_info',
            data: {
                params: {
                    orderId: item.id
                }
            }
        }).then((res) => {
            if (res.code === 0) {
                this.setState({
                    orderInfo: res.result,
                    orderConfirmVisible: true
                })
            }
        })
    }
    //结束订单
    handleFinishOrder = () => {
        let item = this.state.selectedItem;
        axios.ajax({
            url: '/order/finish_order',
            data: {
                params: {
                    orderId: item.id
                }
            }
        }).then((res) => {
            if (res.code === 0) {
                message.success("订单结束成功")
                this.setState({
                    orderConfirmVisible: false
                })
                this.requestList()
            }
        })
    }
    // requestList = () => {
    //     axios.requestList(this, '/order/list', this.params, true)
    // }

    requestList = () => {
        let _this = this
        axios.ajax({
            url: '/order/list',
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
        axios.requestList(this, '/order/list1', this.params, true)
    }


    openOrderDetial = () => {
        let item = this.state.selectedItem;
        if (!item) {
            Modal.info({
                title: "获取信息失败",
                content: "请选择一条订单进行查看"
            })
            return
        }
        window.open(`/#/common/order/detail/${item.id}`, '_blank')

    }
    handleFilter = (params) => {
        this.params = params;
        this.requestList()
    }
    render() {
        const { handleComfirm, handleFinishOrder, openOrderDetial, } = this
        const { selectedRowKeys } = this.state
        const columns = [
            {
                title: '订单编号',
                dataIndex: 'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile'
            },
            {
                title: '行驶里程',
                dataIndex: 'distance',
                render(distance) {
                    return distance / 1000 + "km"
                }
            },
            {
                title: '行驶时间',
                dataIndex: 'total_time'
            },
            {
                title: '订单状态',
                dataIndex: 'status',
                render(status) {
                    return status === 1 ? "进行中" : "结束进程"
                }
            },
            {
                title: '开始时间',
                dataIndex: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay'
            },



        ]
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 }
        }

        return (
            <div className='card-warp' >
                <Card title="订单管理">
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilter} />
                </Card>
                <Card title="订单详情" style={{ marginTop: 10 }}>
                    <Button type='primary' onClick={openOrderDetial}>订单详情</Button>
                    <Button onClick={handleComfirm}>结束订单</Button>
                </Card>
                <div >
                    <ETable
                        updateSelectedItem={Utils.updateSelectedItem.bind(this)}
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                        selectedRowKeys={selectedRowKeys}
                        selectedIds={this.state.selectedIds}
                        selectedItem={this.state.selectedItem}
                    // rowSelection="checkbox"
                    />

                </div>
                <Modal title="结束订单"
                    visible={this.state.orderConfirmVisible}
                    onCancel={() => {
                        this.setState({
                            orderConfirmVisible: false
                        })
                    }}
                    onOk={handleFinishOrder}
                    style={{ width: 600 }}
                >
                    <Form layout='horizontal'>
                        <Form.Item label="车辆编号"  {...formItemLayout}>
                            {this.state.orderInfo.bike_sn}
                        </Form.Item>
                        <Form.Item label="剩余电量"  {...formItemLayout}>
                            {this.state.orderInfo.battery + '%'}
                        </Form.Item>
                        <Form.Item label="开始时间"  {...formItemLayout}>
                            {this.state.orderInfo.start_time}
                        </Form.Item>
                        <Form.Item label="当前位置"  {...formItemLayout}>
                            {this.state.orderInfo.location}
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}
