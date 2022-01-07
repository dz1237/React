import React, { Component } from 'react'
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
    SearchWrapper,
    SerachInfo,
    SerachInfoTitle,
    SerachInfoSwitch,
    SerachInfoItem,
    SerachInfoList
} from './style'
class Header extends Component {//类组件
    getSerachInfo = (show) => {
        if (show) {
            return (
                <SerachInfo >
                    <SerachInfoTitle>
                        热门搜索
                        <SerachInfoSwitch>
                            换一批
                        </SerachInfoSwitch>
                    </SerachInfoTitle>
                    <SerachInfoList>
                        <SerachInfoItem>推荐</SerachInfoItem>
                        <SerachInfoItem>军事</SerachInfoItem>
                        <SerachInfoItem>生活</SerachInfoItem>
                        <SerachInfoItem>科技</SerachInfoItem>
                        <SerachInfoItem>汽车</SerachInfoItem>
                        <SerachInfoItem>新闻</SerachInfoItem>
                        <SerachInfoItem>娱乐</SerachInfoItem>
                        <SerachInfoItem>我的生活</SerachInfoItem>

                    </SerachInfoList>
                </SerachInfo>
            )
        }
        else {
            return null;
        }
    }
    render() {
        let { focused, handleFocus, handleBlur } = this.props;
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
                        {this.getSerachInfo(focused)}
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
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['HeaderReducer', 'focused'])
        // state.get('HeaderReducer').get('focused')
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
