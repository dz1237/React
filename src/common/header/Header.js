import React, { Component } from 'react'
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style'
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProsp = (dispatch) => {
    return {

    }
}
@connect(mapStateToProps, mapDispatchToProsp)
class Header extends Component {
    state = {
        focused: false
    }
    handleFocus = () => {
        this.setState({
            focused: true
        })
    }
    handleBlur = () => {
        this.setState({
            focused: false
        })
    }
    render() {
        let { focused } = this.state;
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
                    <SearchWrapper>
                        <CSSTransition timeout={500} in={focused} classNames="slide">
                            <NavSearch className={this.state.focused ? "focused" : ""}
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={this.state.focused ? "focused iconfont" : "iconfont"}>&#xe617;</span>
                    </SearchWrapper>
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
