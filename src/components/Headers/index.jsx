import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Utlis from '../../utils/utils'
// import Axios from '../../axios/index'
import axios from 'axios'
export default class Header extends Component {

    componentWillMount() {
        this.setState({
            userName: '大壮'
        })
        setInterval(() => {
            let sysTime = Utlis.formateDate(new Date().getTime());
            this.setState({ sysTime })
        }, 1000)
        this.getWeatherAPIData()
    }
    //和风天气不支持jsonp
    getWeatherAPIData() {
        axios.get('https://devapi.qweather.com/v7/weather/now?location=101010100&key=263711c5a082451dbb6f4bddab9e4205')
            .then(res => {
                console.log(res.data.now.text + " " + res.data.now.windDir)
                let weatherPic = res.data.now.icon
                let data = res.data.now.text + " " + res.data.now.windDir
                this.setState({
                    weatherPic: "/assets/color-64/" + weatherPic + ".png",
                    weather: data
                })
            })
    }


    render() {
        return (
            <div className='header'>
                <Row className='header-top'>
                    <Col span={24}>
                        <span>欢迎：{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className='breadcrumb'>
                    <Col span={4} className="breadcrumb-title">首页</Col>
                    <Col span={20} className="weather">
                        <span className='date'>{this.state.sysTime}</span>
                        <span className='weather-detail'>
                            <img src={this.state.dayPictureUrl} alt="" />
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div >
        )
    }
}