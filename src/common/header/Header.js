import React from 'react'
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actions } from './store'
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

const Header = (props) => {

    let { focused, handleFocus, handleBlur } = props;
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
                        <NavSearch className={focused ? "focused" : ""}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <span className={focused ? "focused iconfont" : "iconfont"}>&#xe617;</span>
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

const mapStateToProps = (state) => {
    return {
        focused: state.HeaderReducer.get('focused')
    }
}
const mapDispatchToProsp = (dispatch) => {
    return {
        handleFocus() {

            dispatch(actions.add());

        },
        handleBlur() {

            dispatch(actions.sub());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProsp)(Header);
