import axios from 'axios';
import {CHANGE_INPUT_VALUE,ADD_DEL_ITEM,ADD_TODO_ITEM,INIT_LIST_ACTION} from './actionTypes';
export const actionInputValue = (value) => ({
  type:CHANGE_INPUT_VALUE,
  value:value
})

export const actionAddItem = (value) => ({
  type:ADD_TODO_ITEM
})
export const actionDelItem = (index) => ({
  type:ADD_DEL_ITEM,
  index:index
})
export const initLIstItem = (data) => ({
  type:INIT_LIST_ACTION,
  data:data
})
export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/list.json').then((result) => {
      console.log(result)
      const list = result.data
      const action = initLIstItem(list)
      dispatch(action)
    }).catch((err) => {
      alert(err)
    });
  }
}