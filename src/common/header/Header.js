import React, { Component } from 'react'

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button
} from './style'
// import { iconfont } from '../../statics/iconfont/iconfont';
class Header extends Component {
    render() {
        return (
            <HeaderWrapper >
                <Logo href='/' />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <span className="iconfont">&#xe600;</span>
                    </NavItem>
                    <NavSearch></NavSearch>
                </Nav>
                <Addition>
                    <Button className='writing'>
                        <span className="iconfont">&#xe615;</span>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper >
        )
    }
}
export default Header;
