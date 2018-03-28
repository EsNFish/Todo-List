import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { expect } from 'chai';

describe('actions', () => {
  describe('submitTask', () => {
    it('has the correct type', () => {
      const action = actions.submitTask(null);
      expect(action.type).to.equal(actionTypes.SUBMIT_TASK);
    });

    it('creates an action to submit a task', () => {
      const task = {
        priority: '1',
        todo: 'my new todo',
        dateEntered: '',
        dateDue: '14th Jul 2018',
        status: 'Pending'
      };
      const action = actions.submitTask(task);
      expect(action).to.have.property('dateEntered');
      expect(action.dateEntered).to.be.a('date');
      expect(action).to.have.property('key');
      expect(action.key).to.be.a('string');
      expect(action).to.have.property('newTask');
      expect(action.newTask).to.be.a('object');
      expect(action.newTask).to.deep.equal(task);
    });
  });

  describe('deleteTask', () => {
    it('has the correct type', () => {
      const action = actions.deleteTask(null);
      expect(action.type).to.equal(actionTypes.DELETE_TASK);
    });

    it('creates an action to delete a task', () => {
      const deleteTaskKey = '1234';
      const expectedAction = {
        type: actionTypes.DELETE_TASK,
        deleteTaskKey
      };
      const action = actions.deleteTask(deleteTaskKey);
      expect(action).to.deep.equal(expectedAction);
    });
  });

  describe('editTask', () => {
    it('has the correct type', () => {
      const action = actions.editTask();
      expect(action.type).to.equal(actionTypes.EDIT_TASK);
    });

    it('creates an action to edit a task', () => {
      const updatedTask = {
        priority: '1',
        todo: 'my new todo',
        dateEntered: '',
        dateDue: '14th Jul 2018',
        status: 'Pending'
      };
      const expectedAction = {
        type: actionTypes.EDIT_TASK,
        updatedTask
      };
      const action = actions.editTask(updatedTask);
      expect(action).to.deep.equal(expectedAction);
    });
  });

  describe('selectEdit', () => {
    it('has the correct type', () => {
      const action = actions.selectEdit();
      expect(action.type).to.equal(actionTypes.SELECT_EDIT);
    });

    it('creates an action to set the key of a task to be edited', () => {
      const key = '1234';
      const expectedAction = {
        type: actionTypes.SELECT_EDIT,
        key
      };
      const action = actions.selectEdit(key);
      expect(action).to.deep.equal(expectedAction);
    });
  });

  describe('animateNewTask', () => {
    it('has the correct type', () => {
      const action = actions.animateNewTask();
      expect(action.type).to.equal(actionTypes.ANIMATE_NEW_TASK);
    });

    it('creates an action to set the key of a task to be animated', () => {
      const key = '1234';
      const expectedAction = {
        type: actionTypes.ANIMATE_NEW_TASK,
        key
      };
      const action = actions.animateNewTask(key);
      expect(action).to.deep.equal(expectedAction);
    });
  });
});