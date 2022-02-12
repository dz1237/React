import React, { Component } from "react";
import { Card, Table } from 'antd'
import axios from "axios";
export default class Basic extends Component {
    state = {
        dataSource2: []
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
        this.setState({
            dataSource
        })
        this.request();
    }
    //动态获取mock数据
    request = () => {

        axios.get('/table/list').then((res) => {
            console.log("qwe", JSON.stringify(res));
            if (res.status === 200 && res.data.code == 0) {
                console.log(res.data.result)
                this.setState({ dataSource2: res.data.result })
            }
        })

    }
    render() {
        const { dataSource, dataSource2 } = this.state
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
                dataIndex: 'sex'
            },
            {
                title: '状态',
                dataIndex: 'state'
            },
            {
                title: '爱好',
                dataIndex: 'interset'
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
            </div>
        )
    }
}