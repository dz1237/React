import React, { Component } from "react";
import { Card, Button, Modal, } from 'antd'
// import { PlusOutlined, FormOutlined, DeleteFilled, SearchOutlined, CloudDownloadOutlined, CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import './ui.less'
export default class Modals extends Component {
    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    }
    handleOpen = (type) => {
        this.setState({
            [type]: true
        })
    }
    handleConfirm = (type) => {
        Modal[type]({
            title: "确认？",
            content: "哈哈哈",
            onOk() {
                console.log("ok");
            },
            onCancel() {
                console.log("onCancel ");
            }
        })
    }
    render() {
        return (
            <div style={{ width: "100%" }}>
                <Card title="基础模态框" className="card-warp">
                    <Button type="primary" onClick={() => { this.handleOpen("showModal1") }}>Open</Button>
                    <Button type="primary" onClick={() => { this.handleOpen("showModal2") }}>自定义</Button>
                    <Button type="primary" onClick={() => { this.handleOpen("showModal3") }}>顶部20px</Button>
                    <Button type="primary" onClick={() => { this.handleOpen("showModal4") }}>水平垂直居中</Button>
                </Card>
                <Modal title="React" visible={this.state.showModal1} onCancel={() => { this.setState({ showModal1: false }) }}>
                    <p>欢迎来到大壮单车</p>
                </Modal>
                <Modal title="React" visible={this.state.showModal2} okText="下一步" cancelText="算了" onCancel={() => { this.setState({ showModal2: false }) }}>
                    <p>欢迎来到大壮单车</p>
                </Modal>
                <Modal title="React" style={{ top: 20 }} visible={this.state.showModal3} okText="下一步" cancelText="算了" onCancel={() => { this.setState({ showModal3: false }) }}>
                    <p>欢迎来到大壮单车</p>
                </Modal>
                <Modal title="React" wrapClassName="vertical-center-modal" visible={this.state.showModal4} okText="下一步" cancelText="算了" onCancel={() => { this.setState({ showModal4: false }) }}>
                    <p>欢迎来到大壮单车</p>
                </Modal>
                <Card title="信息确认框" className="card-warp">
                    <Button type="primary" onClick={() => { this.handleConfirm("confirm") }}>Confirm</Button>
                    <Button type="primary" onClick={() => { this.handleConfirm("info") }}>Info</Button>
                    <Button type="primary" onClick={() => { this.handleConfirm("success") }}>Success</Button>
                    <Button type="primary" onClick={() => { this.handleConfirm("warning") }}>Waring</Button>
                </Card>
            </div>
        )
    }
}