import React from "react";
import { withRouter } from "react-router-dom";

const Book = (props) => {
    let handleClick = () => {
        history.push("/cool")
    }
    console.log("this is book`props", props);
    let { history } = props;
    return (
        <div>
            <h1>Book</h1>
            <button onClick={handleClick}>点击跳转到cool</button>
        </div>
    )
}
export default withRouter(Book);