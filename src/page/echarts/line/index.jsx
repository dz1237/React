import React, { Component } from 'react'
import { Card } from 'antd';
import ReactEcharts from 'echarts-for-react';

export default class Line extends Component {

    getOption1 = () => {
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
                    type: 'line',
                    data: [1000, 2000, 5000, 500, 100, 4000, 3000]
                }
            ]
        }
        return option
    }
    getOption2 = () => {
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
            legend: {
                data: ['Off订单量', '小兰订单量']
            },
            series: [
                {
                    name: 'Off订单量',
                    type: 'line',
                    data: [1000, 2000, 5000, 500, 100, 4000, 3000]
                },
                {
                    name: '小兰订单量',
                    type: 'line',
                    data: [500, 200, 9000, 600, 1000, 400, 3000]
                }
            ]
        }
        return option
    }
    getOption3 = () => {
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
            legend: {
                data: ['2020-05订单量']
            },
            series: [

                {
                    name: '2020-05订单量',
                    type: 'line',
                    data: [500, 200, 9000, 600, 1000, 400, 3000],
                    areaStyle: []
                },

            ]
        }
        return option
    }

    render() {
        return (
            <div className="card-warp">
                <Card title="折线图-1图" style={{
                    marginBottom: 10
                }}>
                    <ReactEcharts option={this.getOption1()} theme="Imooc" style={{ height: 500 }} />
                </Card>
                <Card title="折线图-2图" style={{
                    marginBottom: 10
                }}>
                    <ReactEcharts option={this.getOption2()} theme="Imooc" style={{ height: 500 }} />
                </Card>
                <Card title="折线图-3图" style={{
                    marginBottom: 10
                }}>
                    <ReactEcharts option={this.getOption3()} theme="Imooc" style={{ height: 500 }} />
                </Card>

            </div>
        )
    }
}