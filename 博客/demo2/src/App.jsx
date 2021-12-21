import React, { Component } from 'react';
import { Route, HashRouter as Router, NavLink, } from 'react-router-dom'
import Home from './home'
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
import Footer from './Footer'
import Banner from './banner'
import './css/style.css'
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="nav">
                        <ul>
                            <li>
                                <NavLink to="/">首页</NavLink>
                            </li>
                            <li>
                                <NavLink to="/page1">行业</NavLink>
                            </li>
                            <li>
                                <NavLink to="/page2">资源</NavLink>
                            </li>
                            <li>
                                <NavLink to="/page3">分享</NavLink>
                            </li>
                        </ul>
                        <Banner />
                    </div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/page1" component={Page1} />
                    <Route exact path="/page2" component={Page2} />
                    <Route exact path="/page3" component={Page3} />
                    <Footer />
                </div>
            </Router>
        )
    }
}