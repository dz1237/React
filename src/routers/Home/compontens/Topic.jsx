import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
    TopicWrapper,
    TopicItem


} from '../style'
class Topic extends PureComponent {

    render() {
        let { list } = this.props;
        return (
            <div>
                <TopicWrapper>
                    {
                        list.map((item) => {
                            return (

                                <TopicItem TopicItem key={item.get('id')} >
                                    <img className='topic-pic' alt='' src={item.get('imgUrl')} />
                                    {item.get('title')}
                                </TopicItem>
                            )
                        })
                    }



                </TopicWrapper>

            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        // list: state.get('HomeReducer').get('topicList')
        list: state.getIn(['HomeReducer', 'topicList'])
    }
}

export default connect(mapStateToProps)(Topic);