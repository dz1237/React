import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Input, Button } from './style'
class Login extends PureComponent {
    render() {

        return (

            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='账号'></Input>
                    <Input placeholder='密码'></Input>
                    <Button>登录</Button>
                </LoginBox>
            </LoginWrapper>

        )
    }

}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);

