import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actions } from './store/index'
import {
    DetialWrapper,
    Header,
    Connect
} from './style'
class Detial extends PureComponent {
    render() {
        console.log(this.props.match.params.id);
        let { title, content } = this.props
        return (

            <DetialWrapper>
                <Header>
                    {title}
                </Header>
                <Connect dangerouslySetInnerHTML={{ __html: content }}>
                    {/* {content} */}
                </Connect>
            </DetialWrapper >

        )
    }
    componentDidMount() {
        this.props.getDetial(this.props.match.params.id);
    }
}
const mapStateToProps = (state) => {
    return {
        title: state.getIn(['DetialReducer', 'title']),
        content: state.getIn(['DetialReducer', 'content'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDetial(id) {
            dispatch(actions.getDetial(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detial);

