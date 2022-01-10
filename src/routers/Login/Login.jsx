import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actions } from './store'
class Login extends PureComponent {
    render() {
        let { loginState, login } = this.props;
        if (!loginState) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref={(input) => { this.account = input }}></Input>
                        <Input placeholder='密码' ref={(input) => { this.password = input }} type="password"></Input>
                        <Button onClick={() => login(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }
        else {
            return < Redirect to="/" />
        }



    }

}

const mapStateToProps = (state) => ({
    loginState: state.getIn(['LoginReducer', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
    login(account, password) {
        dispatch(actions.login(account.value, password.value))
    }

})
export default connect(mapStateToProps, mapDispatchToProps)(Login);

