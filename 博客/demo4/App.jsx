import React, { Component } from 'react'
import Home from './home'
import Footer from './Footer'
import Banner from './Banner'
import page1 from './page1'
import page2 from './page2'
import page3 from './page3'
import './css/style.css'
import { Route, HashRouter as Router, NavLink } from 'react-router-dom'
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="nav">
                        <ul>
                            <li><NavLink to="/">首页</NavLink></li>
                            <li><NavLink to="/page1">行业</NavLink></li>
                            <li><NavLink to="/page2">资源</NavLink></li>
                            <li><NavLink to="/page3">分享</NavLink></li>
                        </ul>
                        <Banner />
                    </div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/page1" component={page1} />
                    <Route exact path="/page2" component={page2} />
                    <Route exact path="/page3" component={page3} />
                    <Footer />
                </div>
            </Router>
        )
    }
}
