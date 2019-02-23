import React, { Component,Fragment } from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      list:[
        'wertyuio',
        'sdfghjklkjhgf',
        'fghjklkjhgfd'
      ],
      inputValue:''
    }
  }
  handleClick(){
    this.setState({
      list:[...this.state.list, this.state.inputValue],
      inputValue:''
    })
  }
  handeleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }
  deleteItem(index){
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list
    })
  }
  getTodoItem(){
    return(
      this.state.list.map((item,index)=>{
        return <TodoItem delete={this.deleteItem.bind(this)} key={index} content={item} index={index}/>
        })
    )
  }
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handeleInputChange.bind(this)}/>
          <button onClick={this.handleClick.bind(this)}>add</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
