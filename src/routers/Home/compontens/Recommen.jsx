import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RecommenWarpper, RecommenItem, RecommenItem1, RecommenItem2 } from '../style'

class Recommen extends PureComponent {
    render() {
        //let { list } = this.props
        return (

            <RecommenWarpper>
                {/* {
                    list.map((item,index) => {
                        return (
                            < RecommenItem key={index} imgUrl={item.get('imgUrl')} />
                        )
                    })
                } */}
                < RecommenItem1 />
                < RecommenItem2 />
                < RecommenItem1 />
                < RecommenItem2 />
            </RecommenWarpper >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.getIn(['HomeReducer', 'recommenList'])
    }
}
export default connect(mapStateToProps)(Recommen)