import React from 'react'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from '../Components/Home';
import News from '../Components/News';
import Course from '../Components/Course';
import Book from '../Components/Book';
import Cool from '../Components/Cool';
import './../css/style.css'
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
        //创建路由表  
        <Router>

            <div>
                <ul>
                    <li>
                        <NavLink exact activeClassName="active" to="/" >
                            Home页
                        </NavLink>
                        <br />
                    </li>

                    <li>
                        <NavLink activeClassName="active" to="/news/react全家桶/react-router4" >
                            News页
                        </NavLink>
                        <br />
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/course?courseName=react全家桶&router=react-router4" >
                            Crouse页
                        </NavLink>
                        <br />
                    </li>
                    <li>
                        <NavLink activeClassName="active" replace to={{
                            pathname: "/cool",
                            hash: "#123",
                            search: "?sort=100",
                            state: { x: 100 }
                        }} >
                            Cool页
                        </NavLink>
                        <br />
                    </li>

                </ul>
                <hr />
                {/* exact要求路径名和location.pathname完全匹配 */}
                {/* strict要求有斜线的路径只能匹配有斜线的loaction.pathname */}
                <Route path="/" exact component={Home} />
                <Route path="/news/:title/:content" strict component={News} />
                <Route path="/course" component={Course} />
                <Route path="/cool" component={Cool} />
            </div>
        </Router>
    )
}
export default BaseRouter;
