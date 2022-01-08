import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actions } from '../store/index'
class List extends PureComponent {
    render() {
        let { list, getMoreList, page } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link to="/detial" key={index}>
                                <ListItem >
                                    <img className='pic' src={item.get('imgUrl')} alt="" />
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => { getMoreList(page) }}>加载更多</LoadMore>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        // list: state.get('HomeReducer').get('articleList')
        list: state.getIn(['HomeReducer', 'articleList']),
        page: state.getIn(['HomeReducer', 'articlePage'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMoreList(page) {
            dispatch(actions.getMoreList(page))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)