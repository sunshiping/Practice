import React,{Component} from 'react';

class TodoItem extends Component{
  constructor(props){
    super(props);
    this.handleDel = this.handleDel.bind(this);
  }
  handleDel(){
    this.props.delete(this.props.index)
  }
  render(){
    const {content} = this.props;
    return(
      <div onClick={this.handleDel}>
        {content}
      </div>
    )
  }
}
export default TodoItem;