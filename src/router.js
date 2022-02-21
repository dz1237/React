import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, } from 'react-router-dom'
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
export default class IRouter extends Component {
    render() {
        return (
            <Router>
                <App>
                    <Route path="/common" render={() =>
                        <Common>
                            <Route path="/common/order/detail/:orderId" component={Detial} />
                        </Common>
                    } />
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Switch>

                                <Route path="/admin/home/home" component={Home} />
                                <Route path="/admin/ui/buttons" component={Buttons} />
                                <Route path="/admin/ui/modals" component={Modals} />
                                <Route path="/admin/ui/loadings" component={Loadings} />
                                <Route path="/admin/ui/notice" component={Notice} />
                                <Route path="/admin/ui/message" component={Message} />
                                <Route path="/admin/ui/tabs" component={Tab} />
                                <Route path="/admin/ui/gallery" component={Gallery} />
                                <Route path="/admin/ui/carousel" component={carousel} />
                                <Route path="/admin/form/login" component={Login} />
                                <Route path="/admin/form/reg" component={Reg} />
                                <Route path="/admin/table/basic" component={Basic} />
                                <Route path="/admin/table/high" component={High} />
                                <Route path="/admin/city" component={City} />
                                <Route path="/admin/order" component={Order} />
                                <Route path="/admin/user" component={User} />
                                <Route path="/admin/bikeMap" component={bikeMap} />

                                <Route component={NoMatch} />
                            </Switch>
                        </Admin>
                    } />

                </App>
            </Router >
        )
    }
}