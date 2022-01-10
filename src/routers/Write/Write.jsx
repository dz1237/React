import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Write extends PureComponent {
    render() {
        let { loginState, login } = this.props;
        if (loginState) {
            return (
                <div>写文章</div>
            )
        }
        else {
            return < Redirect to="/login" />
        }



    }

}

const mapStateToProps = (state) => ({
    loginState: state.getIn(['LoginReducer', 'login'])
})


export default connect(mapStateToProps)(Write);

