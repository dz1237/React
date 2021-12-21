import React, { Component } from "react";
import Img from './img/timg.jpg'
export default class banner extends Component {
    render() {
        return (
            <div className="banner">
                <img src={Img} />
            </div>
        )
    }
}