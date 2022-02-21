import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftjs from 'draftjs-to-html';

export default class Rich extends Component {
    state = {
        // showRichText: false,
        // editorState: ""
    }
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState
        })
    }
    //清空内容
    handleClearContent = () => {
        console.log("123");
        this.setState({
            editorState: ""
        })
    }
    //获取文本
    handleGetText = () => {
        this.setState({
            showRichText: true
        })
    }

    onEditorChange = (contentState) => {
        this.setState({
            contentState
        })
    }

    render() {
        const { editorState } = this.state
        return (
            <div className="card-warp">
                <Card title="富文本" style={{ marginBottom: 10 }}>
                    <Button type='primary' onClick={this.handleClearContent}> 清空内容</Button>
                    <Button type='primary' onClick={this.handleGetText}>获取文本</Button>
                </Card>
                <Card >

                    <Editor
                        editorState={editorState}
                        onEditorStateChange={this.onEditorStateChange}
                        onContentStateChange={this.onEditorChange}
                    />
                </Card>
                <Modal title="富文本"
                    visible={this.state.showRichText}
                    onCancel={() => {
                        this.setState({
                            showRichText: false
                        })
                    }}
                    footer={null}
                >
                    {draftjs(this.state.contentState)}

                </Modal>
            </div>
        )
    }
}
