import React, { Component } from "react";
import { Card, Button, message, Icon, Tabs, } from 'antd'
import { CheckCircleOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons'
import './ui.less'
const TabPane = Tabs.TabPane
export default class Tab extends Component {
    newTabIndex = 0
    callback = (key) => {
        console.log(key);
    }
    componentWillMount() {
        const panes = [
            {
                title: 'Tab 1',
                content: 'Tab 1',
                key: '1'
            },
            {
                title: 'Tab 2',
                content: 'Tab 2',
                key: '2'
            },
            {
                title: 'Tab 3',
                content: 'Tab 3',
                key: '3'
            }
        ]
        this.setState({
            panes,
            activeKey: panes[0].key
        })
    }
    onChange = (activeKey) => {
        this.setState({
            activeKey
        })
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };
    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    };
    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };

    render() {
        return (
            <div>
                <Card title="Tab标签" className="card-warp">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">欢迎你来到大壮单车1！</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>欢迎你来到大壮单车2！</TabPane>
                        <TabPane tab="Tab 3" key="3">欢迎你来到大壮单车3！</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带有图片 标签" className="card-warp">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab={<span><CheckCircleOutlined />tab1</span>} key="1">欢迎你来到大壮单车1！</TabPane>
                        <TabPane tab={<span><CloseOutlined />tab2</span>} key="2">欢迎你来到大壮单车2！</TabPane>
                        <TabPane tab={<span><CheckOutlined />tab3</span>} key="3">欢迎你来到大壮单车3！</TabPane>
                    </Tabs>
                </Card>
                <Card title="新增tab">
                    <Tabs type="editable-card"
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        onEdit={this.onEdit}

                    >
                        {
                            this.state.panes.map((panel) => {
                                return <TabPane tab={panel.title} key={panel.key} />
                            })
                        }
                    </Tabs>
                </Card>
            </div >
        )
    }
}