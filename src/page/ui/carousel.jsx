import React, { Component } from "react";
import { Carousel, Card } from 'antd'
import './ui.less'

export default class carousel extends Component {


    render() {
        const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
            overflow: 'hidden'
        };


        return (
            <div className="card-warp">
                <Card title="文字背景轮播" className='card-wrap'>
                    <Carousel autoplay>
                        <div>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>
                </Card>
                <Card title="图片背景轮播">

                </Card>
            </div>
        )
    }
}