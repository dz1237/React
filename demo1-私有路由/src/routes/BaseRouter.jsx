import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../Components/Home';
import News from '../Components/News';
import Course from '../Components/Course';
import Book from '../Components/Book';
import Cool from '../Components/Cool';
const PrivateRoute = ({ component: Component, ...rest }) => {
    // props { path: "/cool", componentt: Cool }
    // let Component=Cool
    // let rest={path:"/cool"}
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
                {/* exact要求路径名和location.pathname完全匹配 */}
                {/* strict要求有斜线的路径只能匹配有斜线的loaction.pathname */}
                <Route path="/" exact component={Home} />
                <Route path="/news/" strict component={News} />
                <Route path="/course" component={Course} />
                <Route path="/play" render={(props) => {
                    console.log("play props", props);
                    // let { match, history, location } = props;
                    return (
                        <div>
                            <h3>play组件</h3>
                            <hr />
                            {/* <Book location={location} match={match} history={history} /> */}
                            <Book {...props} />
                        </div>
                    )
                }} />
                {/* <Route path="/cool" component={Cool} /> */}
                <PrivateRoute path="/cool" component={Cool} />
            </div>
        </Router>
    )
}
export default BaseRouter;
