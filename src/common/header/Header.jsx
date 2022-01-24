import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actions } from './store';
import { actions as loginactions } from '../../routers/Login/store'
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
    getSerachInfo = () => {
        let { page, totalPage, list, focused, mouseIn, handleMouse, handleLeave, handleChangePaghe } = this.props
        const pageList = [];

        for (let i = (page - 1) * 10; i < page * 10; i++) {
            pageList.push(<SerachInfoItem key={i}>{list[i]}</SerachInfoItem>)
        }
        if (focused || mouseIn) {
            return (
                <SerachInfo
                    onMouseEnter={handleMouse}
                    onMouseLeave={handleLeave}>
                    <SerachInfoTitle>
                        热门搜索

                        <SerachInfoSwitch
                            onClick={() => { handleChangePaghe(page, totalPage, this.spinIcon) }}
                        ><div><span ref={(icon => { this.spinIcon = icon })} className="iconfont spin">&#xe655;</span>
                                换一批</div>
                        </SerachInfoSwitch>
                    </SerachInfoTitle>
                    <SerachInfoList>
                        {
                            pageList
                        }
                    </SerachInfoList>
                </SerachInfo>
            )
        }
        else {
            return null;
        }
    }
    render() {
        let { focused, handleFocus, handleBlur, logout, list, login } = this.props;

        return (
            <HeaderWrapper >
                <Link to="/"><Logo /></Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {login ? <NavItem className='right' onClick={logout} >退出</NavItem> : <Link to='/login'><NavItem className='right'>登录</NavItem></Link>}
                    <NavItem className='right'>
                        <span className="iconfont">&#xe600;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition timeout={500} in={focused} classNames="slide">
                            <NavSearch className={focused ? "focused" : ""}
                                onFocus={() => { handleFocus(list) }}
                                onBlur={handleBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={focused ? "focused iconfont zoom" : "iconfont zoom"}>&#xe617;</span>
                        {this.getSerachInfo(focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='writing'>
                            <span className="iconfont">&#xe615;</span>
                            写文章
                        </Button>
                        <Button className='reg'>注册</Button>
                    </Link>
                </Addition>
            </HeaderWrapper >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['HeaderReducer', 'focused']),
        list: state.getIn(['HeaderReducer', 'list']),
        page: state.getIn(['HeaderReducer', 'page']),
        mouseIn: state.getIn(['HeaderReducer', 'mouseIn']),
        totalPage: state.getIn(['HeaderReducer', 'totalPage']),
        login: state.getIn(['LoginReducer', 'login']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus(list) {
            if (list.size === 0) {
                dispatch(actions.getList(list));
            };
            dispatch(actions.add());
        },
        handleBlur() {
            dispatch(actions.sub());
        },
        handleMouse() {
            dispatch(actions.changemouseenter());
        },
        handleLeave() {
            dispatch(actions.changemouseleave());
        },
        handleChangePaghe(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            }
            else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            // spin.style.transform = 'rotate(360deg)'
            if (page < totalPage) {
                dispatch(actions.changepage(page + 1));
            } else {
                dispatch(actions.changepage(1));
            }

        },
        logout() {
            dispatch(loginactions.logout())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);