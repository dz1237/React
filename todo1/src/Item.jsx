import React,{Component} from 'react';

export default class Item extends Component{
    state={
        inEdit:false,
        flag:true//是否可以执行onBlur处理函数的代码
    }
    handleEdit=()=>{
        let {todo}=this.props;
       this.setState({
           inEdit:true
       },()=>{
            this.refs.myInput.value=todo.value;
            //原生js模拟出发
           this.refs.myInput.focus();
       })
    }
    render(){
        let {handleEdit}=this;
        let {inEdit,flag}=this.state;

        let {todo , delTodo,changeHasCompleted,editTodo}=this.props;
        let completed=todo.hasCompleted?"completed":"";
        let editing=inEdit?completed+" editing":completed
        return(
           <li className={editing}>
               <div className="view">
                   <input checked={todo.hasCompleted} type="checkbox" onChange={()=>{
                       changeHasCompleted(todo)
                   }} name="" id="" className="toggle"/>
                   <label onDoubleClick={handleEdit}>
                       {todo.value}
                   </label>
                   <button className="destroy" onClick={() => {
    delTodo(todo)
}} />
               </div>
               <input
                   onBlur={ev=>{
                        if(flag){
                            console.log("onBlur")
                            todo.value=this.refs.myInput.value.trim();
                            editTodo(todo);this.setState({inEdit:false})
                        }
                   }
                   }
                   type="text" ref="myInput" className="edit"
                   onKeyUp={ev=>{
                       if(ev.keyCode===13){
                           todo.value=ev.target.value.trim();
                           editTodo(todo);this.setState({
                               inEdit:false
                           })
                       }

                   }}
               />
           </li>
        )
    }
}