import React, { Component } from 'react';
import store from './store';
import {actionInputValue,actionDelItem,actionAddItem, getTodoList} from './store/actionCreator'
import TodoListUI from './TodoListUI';

class TodoList extends  Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelClick = this.handleDelClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return(
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleStoreChange={this.handleStoreChange}
        handleBtnClick={this.handleBtnClick}
        handleDelClick={this.handleDelClick}
      />  
    )
  }
  componentDidMount(){
   const action = getTodoList();
   store.dispatch(action)
  }
  handleInputChange(e) {
    const  action = actionInputValue(e.target.value);
    store.dispatch(action);
  }
  handleBtnClick() {
    const  action = actionAddItem();
    store.dispatch(action);
  }
  handleDelClick(index) {
    const  action = actionDelItem(index);
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
}

export default TodoList;
