import React, { Component } from "react";
import { Card, Spin, Icon, Alert, } from 'antd'
import './ui.less'
export default class Loadings extends Component {
    render() {
        const icon = <Icon type="loading" style={{ fontSize: 24 }} />
        return (
            <div style={{ width: "100%" }}>
                <Card title="Spin的用法" className="card-wrp" >
                    <Spin />
                    <Spin size="small" style={{ margin: 10 }} />
                    <Spin size="default" style={{ margin: 10 }} />
                    <Spin size="large" style={{ margin: 10 }} />
                    <Spin indicator={Icon} />
                </Card>
                <Card title="内容遮罩">
                    <Alert message="React" description="欢迎来到大壮单车" type="info" />
                    <Alert message="React" description="欢迎来到大壮单车" type="success" />

                    <Spin>
                        <Alert message="React" description="欢迎来到大壮单车" type="warning" />
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert message="React" description="欢迎来到大壮单车" type="warning" />
                    </Spin>
                    <Spin tip="加载中..." indicator={icon}>
                        <Alert message="React" description="欢迎来到大壮单车" type="warning" />
                    </Spin>
                </Card>
            </div>
        )
    }
}