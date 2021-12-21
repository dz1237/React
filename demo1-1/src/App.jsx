import React, { Component } from "react";
import BaseRouter from "./route/BaseRouter";
export default class App extends Component {
    render() {
        return (
            <div>
                <h1>App组件</h1> <hr />
                <BaseRouter />
            </div>

        )
    }
}