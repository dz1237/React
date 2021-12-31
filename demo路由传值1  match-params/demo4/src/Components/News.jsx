// import React, { Component } from 'react'

// export default class News extends Component {
//     render() {
//         let { title, content } = this.props.match.params;
//         let style = { background: "#f00" };
//         let styla = { background: "#ff0" };

//         return (
//             <div>
//                 <h1>News组件</h1>
//                 <p>通过路由传的值是：</p>
//                 <p style={style}>title:{title}</p>
//                 <p style={styla}>content:{content}</p>

//             </div>
//         )
//     }
// }
import React, { Component } from 'react';
export default class News extends Component {
    render() {
        let { title, content } = this.props.match.params;

        return (
            <div>
                <h1>
                    News组件
                </h1>
                <hr />
                <p>通过路由传的值是：</p>
                <p>title:{title}</p>
                <p>content:{content}</p>

            </div>
        )
    }
}