import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import List from './compontens/List';
import Topic from './compontens/Topic';
import Writer from './compontens/Writer';
import Recommen from './compontens/Recommen';
import { actions } from './store';
import {
    HomeRight,
    HomeWrapper,
    HomeLeft,
    BackTop
} from './style'
class Home extends PureComponent {

    handTop() {
        window.scrollTo(0, 0);
    }
    render() {
        let { showScorll, } = this.props;
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
                {showScorll ? <BackTop onClick={this.handTop}>Top</BackTop> : ""}

            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changehomedata();
        this.bindEvents()
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changScroolTopShow)
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changScroolTopShow)
    }

}

const mapStateToProps = (state) => {
    return {
        showScorll: state.getIn(['HomeReducer', 'showScorll'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changehomedata() {

            dispatch(actions.getHomeInfo())
        },
        changScroolTopShow() {
            let windowscroll = document.documentElement.scrollTop;
            if (windowscroll > 400) {
                dispatch(actions.changeTopShow(true))
            } else {
                dispatch(actions.changeTopShow(false))
            }
            //windowscrollconsole.log(document.documentElement.scrollTop)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);