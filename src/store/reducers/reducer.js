import * as actionTypes from '../actions/actionTypes';

const reducer = (state, action) => {

  switch (action.type) {

    case actionTypes.SUBMIT_TASK: {
      return {
        ...state,
        tasks: {
          [action.key]: { ...action.newTask, dateEntered: action.dateEntered, key: action.key },
          ...state.tasks
        }
      }
    }

    case actionTypes.EDIT_TASK: {
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.updatedTask.key]: { ...action.updatedTask },
        },
        editTaskKey: ''
      }
    }

    case actionTypes.DELETE_TASK: {
      let { [action.deleteTaskKey]: removedTask, ...remainingTasks } = state.tasks;
      return {
        ...state,
        tasks: remainingTasks,
        editTaskKey: ''
      }
    }

    case actionTypes.SELECT_EDIT: {
      return {
        ...state,
        editTaskKey: action.key
      }
    }

    case actionTypes.NEW_TASK: {
      return {
        ...state,
        newTaskKey: action.key
      }
    }
    default: return state;
  }
}

export default reducer;