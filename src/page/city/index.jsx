import React, { Component } from 'react'
import { Card, Button, Form, Table, Select, Modal, message } from 'antd'
import axios from '../../axios/index'
import Utils from '../../utils/utils'

const { Option } = Select;
export default class City extends Component {
    state = {
        list: [],
        isShowOpenCity: false
    }
    params = {
        page: 1
    }
    componentDidMount() {
        this.requestList({
            isShowOpenCity: true
        });
    }
    //请求默认接口数据
    requestList = () => {
        let _this = this
        axios.ajax({
            url: '/open_city',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then((res) => {
            this.setState({
                list: res.result.item_list.map((item, index) => {
                    item.key = index;
                    return item;
                }),
                pagination: Utils.pagination(res, (current) => {
                    _this.params.page = current
                    _this.requestList();
                })
            })
        })
    }
    //开通城市
    handleOpenCity = () => {
        console.log("1")
        this.setState({
            isShowOpenCity: true
        })
    }
    //城市开通提交
    handleSubmit = () => {
        // let cityInfo = this.cityForm.props.form.getFieldsValue();
        console.log(this.cityForm)
        let cityInfo = this.cityForm.cityForm.getFieldsValue();
        console.log(cityInfo);
        axios.ajax({
            url: '/city/open',
            data: {
                params: cityInfo
            }
        })
            .then(res => {
                if (res.code === 0) {
                    message.success("开通成功");
                    this.setState({
                        isShowOpenCity: false
                    })
                    this.requestList()
                }
            })

    }
    render() {
        let { handleOpenCity, handleSubmit } = this
        const columns = [
            {
                title: "城市ID",
                dataIndex: 'id'
            },
            {
                title: "城市名称",
                dataIndex: 'name'
            },
            {
                title: "用车模式",
                dataIndex: 'mode',
                render(mode) {
                    return mode === 1 ? '指定停车点' : '禁停区'
                }
            },
            {
                title: "营运模式",
                dataIndex: 'franchisee_id',
                render(mode) {
                    return mode === 1 ? '自营' : '加盟'
                }
            },
            {
                title: "授权加盟商",
                dataIndex: 'franchisee_name'
            },
            {
                title: "城市管理员",
                dataIndex: 'city_admins',
                render(arr) {
                    return arr.map((item) => {
                        return item.user_name
                    }).join(',')
                }
            },
            {
                title: "城市开通时间",
                dataIndex: 'open_time'
            },
            {
                title: "操作时间",
                dataIndex: 'update_time'
            },
            {
                title: "操作人",
                dataIndex: 'sys_user_name'
            },

        ]
        return (
            <div className='card-warp'>
                <Card >
                    <FilterForm />
                </Card>
                <Card style={{ marginTop: 10 }}>
                    <Button type='primary' onClick={handleOpenCity}>开通城市</Button>
                </Card>
                <div className='content-warp'>
                    <Table bordered
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                    />
                </div>
                <Modal
                    title="开通城市"
                    visible={this.state.isShowOpenCity}
                    onCancel={() => {
                        this.setState({
                            isShowOpenCity: false
                        })
                    }}
                    onOk={handleSubmit}
                >
                    <OpenCityForm ref={c => { this.cityForm = c }} />
                </Modal>
            </div >
        )
    }
}
class FilterForm extends Component {
    render() {
        return (
            <div>
                <Form layout="inline">
                    <Form.Item label="城市">
                        <Select placeholder="全部" style={{ width: 130 }}>
                            <Option vlaue="">全部</Option>
                            <Option value="1">北京市</Option>
                            <Option value="2">哈尔滨市</Option>
                            <Option value="3">绥化市</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="用车模式" >
                        <Select placeholder="全部" style={{ width: 130 }}>
                            <Option value="">全部</Option>
                            <Option value="1">指定停车模式</Option>
                            <Option value="2">禁停区模式</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="营运模式" >
                        <Select placeholder="全部" style={{ width: 130 }}>
                            <Option value="">全部</Option>
                            <Option value="1">自营</Option>
                            <Option value="2">加盟</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="加盟商授权状态">
                        <Select placeholder="全部" style={{ width: 130 }}>
                            <Option value="">全部</Option>
                            <Option value="1">已授权</Option>
                            <Option value="2">未授权</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" style={{ margin: '0 20px' }}>查询</Button>
                        <Button>重置</Button>
                    </Form.Item>
                </Form >
            </div >
        )
    }
}

class OpenCityForm extends Component {
    render() {
        const formItemLayout = {
            labelCol: { span: 5 },
            warpperCol: { span: 19 }
        }

        return (
            <Form layout='horizontal' {...formItemLayout} ref={c => { this.cityForm = c }} >
                <Form.Item label="选择城市" >

                    <Select placeholder="全部" style={{ width: 130 }}>
                        <Option vlaue="">全部</Option>
                        <Option value="1">北京市</Option>
                        <Option value="2">哈尔滨市</Option>
                        <Option value="3">绥化市</Option>
                    </Select>


                </Form.Item>
                <Form.Item label="营运模式" {...formItemLayout} >
                    <Select placeholder="全部" style={{ width: 130 }}>
                        <Option value="">全部</Option>
                        <Option value="1">自营</Option>
                        <Option value="2">加盟</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="用车模式"  {...formItemLayout}>
                    <Select placeholder="全部" style={{ width: 130 }}>
                        <Option value="">全部</Option>
                        <Option value="1">指定停车模式</Option>
                        <Option value="2">禁停区模式</Option>
                    </Select>
                </Form.Item>
            </Form>
        )
    }
}
