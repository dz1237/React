import React, { Component } from "react";
import { Card, Button } from 'antd'
import { PlusOutlined, FormOutlined, DeleteFilled, SearchOutlined, CloudDownloadOutlined } from '@ant-design/icons'
import './ui.less'
export default class Buttons extends Component {
    render() {
        return (
            <div>
                <Card title="基础按钮">
                    <Button type="primary">Imooc</Button>
                    <Button >Imooc</Button>
                    <Button type="dashed">Imooc</Button>
                    <Button type="danger">Imooc</Button>
                    <Button disabled>Imooc</Button>
                </Card>
                <Card title="图形按钮">
                    <Button icon={< PlusOutlined />}>创建</Button >
                    <Button icon={<FormOutlined />} >编辑</Button>
                    <Button icon={<DeleteFilled />}>删除</Button>
                    <Button shape="circle" icon={<SearchOutlined />}></Button>
                    <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
                    <Button type="primary" icon={<CloudDownloadOutlined />}>下载</Button>
                </Card>
            </div>
        )
    }
}