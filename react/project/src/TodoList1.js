import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import {actionInputValue,actionDelItem,actionAddItem} from './store/actionCreator'
import {connect} from 'react-redux';

const TodoList1 = (props) => {
  const {inputValue, list, handleInputChange, handleBtnClick, handleDelClick} = props
  return(
    <Fragment>
      <div style={{marginTop: '10px',marginLeft: '10px'}}>
        <div>
          <Input
            value={inputValue}
            placeholder="todo info"
            style={{ width: '300px',marginRight: '10px'}}
            onChange={handleInputChange}
            onPressEnter={handleBtnClick}
          />
          <Button type="primary" onClick={handleBtnClick}>提交</Button>
        </div>
        <List
          style={{marginTop:'10px',width: '300px'}}
          bordered
          dataSource={list}
          renderItem={(item, index) => (<List.Item onClick={()=> {handleDelClick(index)}}>{item}</List.Item>)}
        />
      </div>
    </Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
// store dispatch,props
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const  action = actionInputValue(e.target.value);
      dispatch(action);
    },
    handleBtnClick() {
      const  action = actionAddItem();
      dispatch(action);
    },
    handleDelClick(index) {
      const  action = actionDelItem(index);
      dispatch(action);
    }
    // handleStoreChange() {
    //   this.setState(store.getState());
    // }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList1);
