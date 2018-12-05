import {CHANGE_INPUT_VALUE,ADD_DEL_ITEM,ADD_TODO_ITEM} from './actionTypes';
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