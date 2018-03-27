import * as actionTypes from '../actions/actionTypes';

export const submitTask = (newTask) => {
  return {
    type: actionTypes.SUBMIT_TASK,
    dateEntered: new Date(),
    key: new Date().getTime().toString(),
    newTask
  }
}

export const deleteTask = (deleteTaskKey) => {
  return {
    type: actionTypes.DELETE_TASK,
    deleteTaskKey
  }
}

export const editTask = (updatedTask) => {
  return {
    type: actionTypes.EDIT_TASK,
    updatedTask
  }
}

export const selectEdit = (key) => {
  return {
    type: actionTypes.SELECT_EDIT,
    key
  }
}

export const newTask = (key) => {
  return {
    type: actionTypes.NEW_TASK,
    key
  }
}