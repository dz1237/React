import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Component/Home";
import News from "../Component/News";
import Course from "../Component/Course";
const BaseRouter = () => {
    return (
        <Router>
            <div>
                <Route path="/" exact component={Home} />
                <Route exact strict path="/News" component={News} />
                <Route path="/Course" component={Course} />
            </div>
        </Router>
    )
}
export default BaseRouter;