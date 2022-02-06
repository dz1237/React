import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Header from './components/Headers'
import Footer from './components/Footers'
import NavLeft from './components/NavLeft'
// import Home from './page/home'
export default class Admin extends Component {
    render() {
        return (
            <Row className='container'>
                <Col span={3} className="nav-left" >
                    <NavLeft />
                </Col>
                <Col span={21} className="main">
                    <Header />
                    <Row className='content'>
                        {/* <Home /> */}
                        {this.props.children}
                    </Row>
                    <Footer />

                </Col>
            </Row>
        )

    } mountNode

}