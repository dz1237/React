import React, { Component } from 'react'
import { Card } from 'antd';
import ReactEcharts from 'echarts-for-react';

export default class Bar extends Component {

    getOption = () => {
        let option = {
            title: {
                text: '用户情形订单'
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日',]
            },
            yAxis: {
                type: 'value'
            },
            tooltip: {
                trigger: 'axis'
            },
            series: [
                {
                    name: '订单量',
                    type: 'bar',
                    data: [1000, 2000, 5000, 500, 100, 4000, 3000]
                }
            ]
        }
        return option
    }

    getOption2 = () => {
        let option = {
            title: {
                text: "用户骑行订单"
            },
            legend: {
                data: ["OFO", "摩拜", "小蓝"]
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'OFO',
                    type: 'bar',
                    data: [2000, 3000, 5500, 7000, 8000, 12000, 20000]
                }, {
                    name: '摩拜',
                    type: 'bar',
                    data: [1500, 3000, 4500, 6000, 8000, 10000, 15000]
                }, {
                    name: '小蓝',
                    type: 'bar',
                    data: [1000, 2000, 2500, 4000, 6000, 7000, 8000]
                }
            ]
        }
        return option;
    }
    render() {
        return (
            <div className="card-warp" >
                <Card title="柱状图之一" style={{ marginBottom: 10, height: 500 }}>
                    <ReactEcharts option={this.getOption()} theme="Imooc" />
                </Card>
                <Card title="柱状图之二">
                    <ReactEcharts option={this.getOption2()} theme="Imooc" style={{ height: 500 }} />
                </Card>
            </div >
        )
    }
}