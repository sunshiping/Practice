import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

class TodoListUI extends  Component {
  render() {
    return(
      <Fragment>
        <div style={{marginTop: '10px',marginLeft: '10px'}}>
          <div>
            <Input
              value={this.props.inputValue}
              placeholder="todo info"
              style={{ width: '300px',marginRight: '10px'}}
              onChange={this.props.handleInputChange}
              onPressEnter={this.props.handleBtnClick}
            />
            <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
          </div>
          <List
            style={{marginTop:'10px',width: '300px'}}
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => (<List.Item onClick={(index)=> {this.props.handleDelClick(index)}}>{item}</List.Item>)}
          />
        </div>
      </Fragment>
    )
  }
}
export default TodoListUI;
