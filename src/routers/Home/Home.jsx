import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import List from './compontens/List';
import Topic from './compontens/Topic';
import Writer from './compontens/Writer';
import Recommen from './compontens/Recommen';
import { actions } from './store';
import {
    HomeRight,
    HomeWrapper,
    HomeLeft
} from './style'
class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt="" className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommen />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changehomedata()
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changehomedata() {
            const action = actions.getHomeInfo();
            dispatch(action)
        }
    }
}
export default connect(null, mapDispatchToProps)(Home);