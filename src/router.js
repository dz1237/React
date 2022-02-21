import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
// import Login from './page/login'
import Admin from "./admin";
import Buttons from "./page/ui/buttons";
import NoMatch from "./page/nomatch";
import Home from "./page/home";
import Modals from './page/ui/modals'
import Loadings from './page/ui/loadings'
import Notice from './page/ui/notice'
import Message from './page/ui/message'
import Tab from './page/ui/tabs'
import Gallery from './page/ui/gallery'
import carousel from './page/ui/carousel'
import Login from './page/form/login'
import Reg from './page/form/reg'
import Basic from './page/table/basicTable'
import High from './page/table/high'
import City from './page/city/index'
import Order from './page/order/index'
import Common from './common'
import User from './page/user/index'
import Detial from './page/order/detial'
import bikeMap from './page/bikeMap/index'
import Bar from './page/echarts/bar'
import Line from './page/echarts/line'
import Pie from './page/echarts/pie'
import Rich from './page/rich'
import Permission from './page/permission'
export default class IRouter extends Component {
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path="/common" render={() =>
                            <Common>
                                <Route path="/common/order/detail/:orderId" exact component={Detial} />
                            </Common>
                        } />
                        <Route path="/" render={() =>
                            <Admin>
                                <Switch>
                                    <Route path="/home/home" component={Home} />
                                    <Route path="/ui/buttons" component={Buttons} />
                                    <Route path="/ui/modals" component={Modals} />
                                    <Route path="/ui/loadings" component={Loadings} />
                                    <Route path="/ui/notice" component={Notice} />
                                    <Route path="/ui/message" component={Message} />
                                    <Route path="/ui/tabs" component={Tab} />
                                    <Route path="/ui/gallery" component={Gallery} />
                                    <Route path="/ui/carousel" component={carousel} />
                                    <Route path="/form/login" component={Login} />
                                    <Route path="/form/reg" component={Reg} />
                                    <Route path="/table/basic" component={Basic} />
                                    <Route path="/table/high" component={High} />
                                    <Route path="/city" component={City} />
                                    <Route path="/order" component={Order} />
                                    <Route path="/user" component={User} />
                                    <Route path="/bikeMap" component={bikeMap} />
                                    <Route path="/echarts/bar" component={Bar} />
                                    <Route path="/echarts/line" component={Line} />
                                    <Route path="/echarts/pie" component={Pie} />
                                    <Route path="/rich" component={Rich} />
                                    <Route path="/permission" component={Permission} />
                                    <Redirect to='/home/home' />
                                    <Route component={NoMatch} />
                                </Switch>
                            </Admin>
                        } />
                    </Switch>
                </App>
            </Router >
        )
    }
}