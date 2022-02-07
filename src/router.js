import React, { Component } from "react";
import { HashRouter as Router, Route, } from 'react-router-dom'
import App from './App'
import Login from './page/login'
import Admin from "./admin";
import Buttons from "./page/ui/buttons";
// import NoMatch from "./page/nomatch";
import Home from "./page/home";
export default class IRouter extends Component {
    render() {
        return (
            <Router>
                <App>

                    <Route path="/login" component={Login} />
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Route path="/admin/home/home" component={Home} />
                            <Route path="/admin/ui/buttons" component={Buttons} />
                            {/* <Route component={NoMatch} /> */}
                        </Admin>
                    } />


                </App>
            </Router >
        )
    }
}