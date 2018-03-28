import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers/reducer';
import { LOCAL_STORAGE_TASKS_KEY } from '../appConstants';
import localStorageMiddleware from './middleware/localStorageMiddleware';

const defaultState = {
  tasks: (localStorage.getItem(LOCAL_STORAGE_TASKS_KEY)) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY)) : {},
  editTaskKey: '',
  animateTaskKey: ''
}

const appStore = createStore(reducer, defaultState, applyMiddleware(thunk, localStorageMiddleware));

export default appStore;