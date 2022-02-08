import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, } from 'react-router-dom'
import App from './App'
import Login from './page/login'
import Admin from "./admin";
import Buttons from "./page/ui/buttons";
import NoMatch from "./page/nomatch";
import Home from "./page/home";
import Modals from './page/ui/modals'
import Loadings from './page/ui/loadings'
export default class IRouter extends Component {
    render() {
        return (
            <Router>
                <App>

                    <Route path="/login" component={Login} />
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Switch>
                                <Route path="/admin/home/home" component={Home} />
                                <Route path="/admin/ui/buttons" component={Buttons} />
                                <Route path="/admin/ui/modals" component={Modals} />
                                <Route path="/admin/ui/loadings" component={Loadings} />
                                <Route component={NoMatch} />
                            </Switch>
                        </Admin>
                    } />


                </App>
            </Router >
        )
    }
}