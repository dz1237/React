import React, { PureComponent } from 'react'
import { WriterWarpper } from '../style'
import { connect } from 'react-redux'
class Writer extends PureComponent {
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