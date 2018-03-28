import { LOCAL_STORAGE_TASKS_KEY } from '../../appConstants';
import * as actionTypes from '../actions/actionTypes';
import { animateNewTask } from '../actions/actions';

const localStorageMiddleware = store => next => action => {
  next(action);
  switch (action.type) {
    case actionTypes.SUBMIT_TASK:
      next(animateNewTask(action.key));
      setTimeout(() => { next(animateNewTask("")) }, 1000);
    case actionTypes.EDIT_TASK:
    case actionTypes.DELETE_TASK:
      localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(store.getState().tasks));
      break;
    default:
  }
}

export default localStorageMiddleware;