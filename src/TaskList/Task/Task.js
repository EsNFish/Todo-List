import React from 'react';
import moment from 'moment';

const task = (props) => (
  <tr id={props.task.key} onClick={() => props.editTask(props.task.key)} >
    <td>{props.task.priority}</td>
    <td>{props.task.todo}</td>
    <td>{moment(props.task.dateEntered).format("Do MMM YYYY")}</td>
    <td>{moment(props.task.dateDue).format('Do MMM YYYY')}</td>
    <td>{props.task.status}</td>
  </tr>
);

export default task;