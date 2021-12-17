import React, { Component } from 'react'
import axios from 'axios-jsonp-pro'
export default class App extends Component {
    state = {
        name: "",
        age: "",
        sex: ""
    }
    render() {
        let { name, age, sex } = this.state
        return (
            <div>
                <h1>App组件</h1>
                <hr />
                <p>
                    {name}:{age}:{sex}
                </p>
            </div>
        )
    }
    componentDidMount() {
        axios.jsonp('http://www.bjlink32.com/data10.php')
            .then((response) => {
                this.setState({
                    name: response.name,
                    age: response.age,
                    sex: response.sex,
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}
