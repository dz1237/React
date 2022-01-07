import React, { Component } from 'react'
import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'
class List extends Component {
    render() {
        let { list } = this.props;
        return (
            <div>
                {
                    list.map((item) => {
                        return (
                            <ListItem key={item.get('id')}>
                                <img className='pic' src={item.get('imgUrl')} alt="" />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }


            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        // list: state.get('HomeReducer').get('articleList')
        list: state.getIn(['HomeReducer', 'articleList'])
    }
}
export default connect(mapStateToProps)(List)