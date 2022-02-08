import React, { Component } from "react";
import { Card, Button, Radio } from 'antd'
import { PlusOutlined, FormOutlined, DeleteFilled, SearchOutlined, CloudDownloadOutlined, CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import './ui.less'
export default class Buttons extends Component {
    state = {
        loading: true,
        size: "default"

    }
    handleCloseLoading = () => {
        this.setState({
            loading: false
        })
    }
    handChange = (e) => {
        this.setState({
            size: e.target.value
        })
    }
    render() {
        return (
            <div>
                <Card title="基础按钮" className="card-warp">
                    <Button type="primary">Imooc</Button>
                    <Button >Imooc</Button>
                    <Button type="dashed">Imooc</Button>
                    <Button type="danger">Imooc</Button>
                    <Button disabled>Imooc</Button>
                </Card>
                <Card title="图形按钮" className="card-warp">
                    <Button icon={< PlusOutlined />}>创建</Button >
                    <Button icon={<FormOutlined />} >编辑</Button>
                    <Button icon={<DeleteFilled />}>删除</Button>
                    <Button shape="circle" icon={<SearchOutlined />}></Button>
                    <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
                    <Button type="primary" icon={<CloudDownloadOutlined />}>下载</Button>
                </Card>
                <Card title="Loading按钮" className="card-warp">
                    <Button type="primary" loading={true}>确定</Button >
                    <Button type="primary" loading={true} shape="circle"  ></Button>
                    <Button loading={true} >点击加载</Button>
                    <Button shape="circle" loading={true} ></Button>
                    <Button type="primary" loading={true} onClick={this.handleCloseLoading} >关闭</Button>

                </Card>
                <Card title="按钮组">
                    <Button.Group>
                        <Button type="primary" icon={<CaretLeftOutlined />}>
                            后退
                        </Button>
                        <Button type="primary" icon={<CaretRightOutlined />}>
                            前进
                        </Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="card-warp">
                    <Radio.Group value={this.state.size} onChange={this.handChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="defalut">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>Imooc</Button>
                    <Button type="primary" size={this.state.size}>Imooc</Button>
                    <Button type="primary" size={this.state.size}>Imooc</Button>


                </Card>
            </div >
        )
    }
}