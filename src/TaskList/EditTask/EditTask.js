import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import DateTime from 'react-datetime';
import { Button, FormControl } from 'react-bootstrap';
import ContentEditable from 'react-contenteditable';

import './EditTask.css';
import { NEW_TASK } from '../../appConstants';
import * as actions from '../../store/actions/actions';
import Aux from '../../Auxiliary/Aux1';

class EditTask extends Component {

  state = {
    task: { ...this.props.task },
    isEditable: this.props.isEditable
  }

  onChangeHandler = (type, value) => {
    const newTask = { ...this.state.task }
    newTask[type] = value;
    this.setState({ task: newTask });
  }

  resetInput = () => {
    this.setState({ task: { ...NEW_TASK } });
  }

  submitTask = () => {
    if (this.state.task.todo !== '') {
      this.props.onAddTask({ ...this.state.task });
      this.resetInput();
    }
  }

  render() {

    const buttons = this.state.isEditable
      ? (
        <Aux>
          <td className="button-td"><Button bsSize="xsmall" bsStyle="success" onClick={() => this.props.onEditTask(this.state.task)} >SUBMIT</Button></td>
          <td className="button-td"><Button bsSize="xsmall" bsStyle="danger" onClick={() => this.props.onDeleteTask(this.state.task.key)} >DELETE</Button></td>
        </Aux>
      ) : (
        <Aux>
          <td className="button-td"><Button bsSize="xsmall" bsStyle="success" onClick={this.submitTask} >ADD</Button></td>
          <td className="button-td"><Button bsSize="xsmall" bsStyle="danger" onClick={this.resetInput} >RESET</Button></td>
        </Aux>
      );

    return (
      <tr id={this.state.id} >
        <td>
          <FormControl
            componentClass="select"
            placeholder=""
            value={this.state.task.priority}
            onChange={(event) => this.onChangeHandler("priority", event.target.value)}
            bsClass="form-control form-control-display">
            <option disabled selected value=""></option>
            <option value="1" >1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </FormControl>
        </td>
        <td>
          <ContentEditable
            html={this.state.task.todo}
            disabled={false}
            onChange={(event) => this.onChangeHandler("todo", event.target.value)} />
        </td>
        <td>{moment(this.state.task.dateEntered).format("Do MMM YYYY")}</td>
        <td>
          <DateTime
            dateFormat="Do MMM YYYY"
            timeFormat={false}
            onChange={(event) => this.onChangeHandler("dateDue", event._d)}
            value={moment(this.state.task.dateDue).format("Do MMM YYYY")}
          />
        </td>
        <td>
          <FormControl
            componentClass="select"
            placeholder=""
            value={this.state.task.status}
            onChange={(event) => this.onChangeHandler("status", event.target.value)}
            bsClass="form-control form-control-display">
            <option disabled selected value=""></option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Complete">Complete</option>
          </FormControl>
        </td>
        {buttons}
      </tr>
    );
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddTask: (newTask) => dispatch(actions.submitTask(newTask)),
    onEditTask: (task) => dispatch(actions.editTask(task)),
    onDeleteTask: (taskKey) => dispatch(actions.deleteTask(taskKey))
  }
}

export default connect(null, mapDispatchToProps)(EditTask);