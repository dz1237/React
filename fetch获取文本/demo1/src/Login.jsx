import React from 'react'
import User from './User'
import Button from './Button'
import Password from './Password'

const login = () => {

    return (
        <div>
            <User user="用户名" />
            <Password pwd="密码" />
            <Button btn="登录" />
        </div>
    )
}
export default login;