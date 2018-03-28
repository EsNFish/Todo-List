import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import './Task.css';

export const Task = (props) => (
  <tr className={props.animateTaskKey === props.task.key ? "newTask" : null} id={props.task.key} onClick={() => props.editTask(props.task.key)} >
    <td>{props.task.priority}</td>
    <td>{props.task.todo}</td>
    <td>{moment(props.task.dateEntered).format("Do MMM YYYY")}</td>
    <td>{moment(props.task.dateDue).format('Do MMM YYYY')}</td>
    <td>{props.task.status}</td>
  </tr>
);

const mapStateToProps = state => {
  return {
    animateTaskKey: state.animateTaskKey,
  }
}
export default connect(mapStateToProps)(Task);