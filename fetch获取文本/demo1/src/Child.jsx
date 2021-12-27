import React, {PureComponent} from 'react'

export default class Child extends PureComponent{
    UNSAFE_componentWillMount(){
        alert("child UNSAFF_componentWillMount 1")
    }
    render(){
        alert("child render 2");
        let {x}=this.props;
        return(
            <div>
                <h3>
                    child组件
                </h3>
                <p>父组件给子组件通过属性this.props传递的数据x:{x}</p>
            </div>
        )
    }
    componentDidMount() {
        alert("child componentDidMount 3")
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        alert("child UNSAFE_componentWillReceivePros 4")
    }
    // shouldComponentUpdate(){
    //         alert("child shouldComponentUpdate 5");
    //         return true;
    // }
    UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
        alert("child UNSAFE_componentWillUpdate 6")
    }
    componentDidUpdate(){
        alert("child componentDidUpdate 7")
    }

}