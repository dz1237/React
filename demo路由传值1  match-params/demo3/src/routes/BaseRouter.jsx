import React from 'react'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import Home from '../Components/Home'
import News from '../Components/News'
import Course from '../Components/Course'
import Cool from '../Components/Cool'
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => {
            return (
                <Component {...props} />
            )
        }} />
    )
}
const BaseRouter = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home页</Link></li>
                    <li><Link to="/news/react全家桶/react-route4">news页</Link></li>
                    <li><Link to="/course">Course页</Link></li>
                    <li><Link to="/cool">Cool页</Link></li>
                </ul>
                <hr />
                <Route path="/" exact component={Home} />
                <Route path="/news/:title/:content" strict exact component={News} />
                <Route path="/course" component={Course} />
                <Route path="/cool" component={Cool} />
            </div>
        </Router>
    )
}
export default BaseRouter;
