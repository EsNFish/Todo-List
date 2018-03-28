import reducer from './reducer';
import * as actionTypes from '../actions/actionTypes';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('SUBMIT_TASK: should add a new task', () => {
    const action = {
      type: actionTypes.SUBMIT_TASK,
      dateEntered: '13th Jul 2018',
      key: '1234',
      newTask: {
        priority: '1',
        todo: 'my new todo',
        dateEntered: '',
        dateDue: '14th Jul 2018',
        status: 'Pending'
      }
    }
    expect(reducer(undefined, action)).toEqual({
      tasks: {
        '1234': {
          key: '1234',
          priority: '1',
          todo: 'my new todo',
          dateEntered: '13th Jul 2018',
          dateDue: '14th Jul 2018',
          status: 'Pending'
        }
      }
    });
  });

  it('EDIT_TASK: should update a task by its key', () => {
    const action = {
      type: actionTypes.EDIT_TASK,
      updatedTask: {
        key: '34',
        priority: '3',
        todo: 'I have edited this todo',
        dateEntered: '13th Jul 2018',
        dateDue: '20th Jul 2018',
        status: 'In Progress'
      }
    };
    const state = {
      editTaskKey: '34',
      tasks: {
        '12': {
          key: '12',
          priority: '1',
          todo: 'my new todo',
          dateEntered: '13th Jul 2018',
          dateDue: '14th Jul 2018',
          status: 'Pending'
        },
        '34': {
          key: '34',
          priority: '1',
          todo: 'my todo to be edited',
          dateEntered: '13th Jul 2018',
          dateDue: '14th Jul 2018',
          status: 'Pending'
        },
        '56': {
          key: '56',
          priority: '1',
          todo: 'my other todo',
          dateEntered: '13th Jul 2018',
          dateDue: '14th Jul 2018',
          status: 'Pending'
        }
      }
    };
    expect(reducer(state, action)).toEqual({
      editTaskKey: '',
      tasks: {
        '12': {
          key: '12',
          priority: '1',
          todo: 'my new todo',
          dateEntered: '13th Jul 2018',
          dateDue: '14th Jul 2018',
          status: 'Pending'
        },
        '34': {
          key: '34',
          priority: '3',
          todo: 'I have edited this todo',
          dateEntered: '13th Jul 2018',
          dateDue: '20th Jul 2018',
          status: 'In Progress'
        },
        '56': {
          key: '56',
          priority: '1',
          todo: 'my other todo',
          dateEntered: '13th Jul 2018',
          dateDue: '14th Jul 2018',
          status: 'Pending'
        }
      }
    });
  });

  it('DELETE_TASK: should delete a task by key', () => {
    const action = {
      type: actionTypes.DELETE_TASK,
      deleteTaskKey: '34'
    };
    const state = {
      editTaskKey: '34',
      tasks: {
        '12': {
          key: '12',
          priority: '1',
          todo: 'my new todo',
          dateEntered: '13th Jul 2018',
          dateDue: '14th Jul 2018',
          status: 'Pending'
        },
        '34': {
          key: '34',
          priority: '1',
          todo: 'my todo to delete',
          dateEntered: '13th Jul 2018',
          dateDue: '14th Jul 2018',
          status: 'Complete'
        },
        '56': {
          key: '56',
          priority: '1',
          todo: 'my other todo',
          dateEntered: '13th Jul 2018',
          dateDue: '14th Jul 2018',
          status: 'Pending'
        }
      }
    };
    expect(reducer(state, action)).toEqual({
      editTaskKey: '',
      tasks: {
        '12': {
          key: '12',
          priority: '1',
          todo: 'my new todo',
          dateEntered: '13th Jul 2018',
          dateDue: '14th Jul 2018',
          status: 'Pending'
        },
        '56': {
          key: '56',
          priority: '1',
          todo: 'my other todo',
          dateEntered: '13th Jul 2018',
          dateDue: '14th Jul 2018',
          status: 'Pending'
        }
      }
    });
  });

  it('SELECT_TASK: sets the key for the task to be edited', () => {
    const action = {
      type: actionTypes.SELECT_EDIT,
      key: '34'
    };
    const state = {
      editTaskKey: ''
    };
    expect(reducer(state, action)).toEqual({
      editTaskKey: '34'
    })
  });
});