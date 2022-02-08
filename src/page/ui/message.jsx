import React, { Component } from "react";
import { Card, Button, message } from 'antd'
import './ui.less'
export default class Message extends Component {
    showMessage = (type) => {
        message[type]("欢迎你来到大壮单车！")
    }
    render() {
        return (
            <div>
                <Card title="全局message" className="card-warp">
                    <Button type="primary" onClick={() => { this.showMessage("success") }}>Success </Button>
                    <Button type="primary" onClick={() => { this.showMessage("info") }}>info </Button>
                    <Button type="primary" onClick={() => { this.showMessage("warning") }}>warning</Button>
                    <Button type="primary" onClick={() => { this.showMessage("error") }}>error </Button>
                    <Button type="primary" onClick={() => { this.showMessage("loading") }}>loading </Button>

                </Card>
            </div>
        )
    }
}