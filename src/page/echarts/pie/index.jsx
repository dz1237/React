import React, { Component } from 'react'
import { Card } from 'antd';
import ReactEcharts from 'echarts-for-react';

export default class Pie extends Component {
    getOption1 = () => {
        let option = {
            title: {
                text: '用户情形订单',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a}<br/>{b}:{c}({d}%)"
            },
            legend: {
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日',]
            },
            series: [
                {
                    name: '订单量',
                    type: 'pie',
                    data: [
                        {
                            value: 1000,
                            name: "周一"
                        },
                        {
                            value: 1400,
                            name: "周二"
                        },
                        {
                            value: 1200,
                            name: "周三"
                        },
                        {
                            value: 10,
                            name: "周四"
                        },
                        {
                            value: 1000,
                            name: "周五"
                        },
                        {
                            value: 1004,
                            name: "周六"
                        },
                        {
                            value: 2000,
                            name: "周日"
                        },

                    ]
                }
            ],

        }
        return option
    }

    getOption2 = () => {
        let option = {
            title: {
                text: '用户情形订单',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a}<br/>{b}:{c}({d}%)"
            },
            legend: {
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日',]
            },
            series: [
                {
                    name: '订单量',
                    type: 'pie',
                    radius: ["70%", "90%"],
                    data: [
                        {
                            value: 1000,
                            name: "周一"
                        },
                        {
                            value: 1400,
                            name: "周二"
                        },
                        {
                            value: 1200,
                            name: "周三"
                        },
                        {
                            value: 10,
                            name: "周四"
                        },
                        {
                            value: 1000,
                            name: "周五"
                        },
                        {
                            value: 1004,
                            name: "周六"
                        },
                        {
                            value: 2000,
                            name: "周日"
                        },

                    ]
                }
            ],

        }
        return option;
    }
    getOption3 = () => {
        let option = {
            title: {
                text: '用户情形订单',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a}<br/>{b}:{c}({d}%)"
            },
            legend: {
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日',]
            },
            series: [
                {
                    name: '订单量',
                    type: 'pie',
                    data: [
                        {
                            value: 1000,
                            name: "周一"
                        },
                        {
                            value: 1700,
                            name: "周二"
                        },
                        {
                            value: 1200,
                            name: "周三"
                        },
                        {
                            value: 10,
                            name: "周四"
                        },
                        {
                            value: 1500,
                            name: "周五"
                        },
                        {
                            value: 1004,
                            name: "周六"
                        },
                        {
                            value: 2000,
                            name: "周日"
                        },

                    ].sort((a, b) => {
                        return a.vlaue - b.value
                    }),
                    roseType: 'radius'
                }
            ],

        }
        return option;
    }
    render() {
        return (
            <div className="card-warp">
                <Card title="饼图-基本图" style={{
                    marginBottom: 10
                }}>
                    <ReactEcharts option={this.getOption1()} theme="Imooc" style={{ height: 500 }} />
                </Card>
                <Card title="饼图-环形图" style={{
                    marginBottom: 10
                }}>
                    <ReactEcharts option={this.getOption2()} theme="Imooc" style={{ height: 500 }} />
                </Card>
                <Card title="饼图-南丁格尔图" style={{
                    marginBottom: 10
                }}>
                    <ReactEcharts option={this.getOption3()} theme="Imooc" style={{ height: 500 }} />
                </Card>
            </div>
        )
    }
}