import React from 'react'
import { HashRouter as Router, Route, NavLink, Switch, Link } from 'react-router-dom';
import Home from '../Components/Home';
import News from '../Components/News';
import Course from '../Components/Course';
import Book from '../Components/Book';
import Cool from '../Components/Cool';
import '../css/style'
import '../Components/NoMATCH'
import NoMatch from '../Components/NoMATCH';
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
                <ul >
                    {/* <li>
                        <Link to="/" >
                            Home页
                        </Link>
                        <br />
                    </li>

                    <li>
                        <Link to="/news/react全家桶/react-router4" >
                            News页
                        </Link>
                        <br />
                    </li>
                    <li>
                        <Link to="/course?courseName=react全家桶&router=react-router4" >
                            Crouse页
                        </Link>
                        <br />
                    </li>
                    <li>
                        <Link replace to={{
                            pathname: "/cool",
                            hash: '#abc',
                            search: "?sort=10009",
                            state: { x: 1000 }
                        }} >
                            Cool页
                        </Link>
                        <br />
                    </li> */}
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
                            hash: '#abc',
                            search: "?sort=10009",
                            state: { x: 1000 }
                        }} >
                            Cool页
                        </NavLink>
                        <br />
                    </li>

                </ul>
                <hr />
                {/* exact要求路径名和location.pathname完全匹配 */}
                {/* strict要求有斜线的路径只能匹配有斜线的loaction.pathname */}
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/news/:title/:content" strict component={News} />
                    <Route path="/course" component={Course} />
                    <Route path="/cool" component={Cool} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    )
}
export default BaseRouter;
