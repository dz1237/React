import React, { Component } from 'react'
import Img from './img/timg.jpg'
export default class Banner extends Component {
    render() {
        return (
            <div className='banner'>
                <img src={Img} alt="" />
            </div>
        )
    }
}
