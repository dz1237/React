import React from 'react'
import { HashRouter as Router, Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';
import Home from '../Components/Home';
import News from '../Components/News';
import Course from '../Components/Course';
// import Book from '../Components/Book';
import Cool from '../Components/Cool';
import './../css/style.css'
import NoMatch from '../Components/NoMatch';


const BaseRouter = () => {
    let style = {
        background: "#ff0",
        color: "#d0d"
    }
    return (
        //创建路由表  
        <Router>

            <div>
                <ul>
                    <li>
                        <NavLink exact replace activeStyle={style} to="/" >
                            Home页
                        </NavLink>
                        <br />
                    </li>

                    <li>
                        <NavLink activeStyle={style} to="/news/react全家桶/react-router4" >
                            News页
                        </NavLink>
                        <br />
                    </li>
                    <li>
                        <NavLink activeStyle={style} to="/course?courseName=react全家桶&router=react-router4" >
                            Crouse页
                        </NavLink>
                        <br />
                    </li>
                    <li>
                        <NavLink activeStyle={style} replace to="/cool" >
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
                    <Route path="/cool/" component={Cool} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router >
    )
}
export default BaseRouter;
