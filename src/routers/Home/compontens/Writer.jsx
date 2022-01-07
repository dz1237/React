import React, { Component } from 'react'
import { WriterWarpper } from '../style'
import { connect } from 'react-redux'
class Writer extends Component {
    render() {
        return (
            <WriterWarpper>
                我是帅哥

            </WriterWarpper>
        )
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
export default connect(mapStateToProps)(Writer)