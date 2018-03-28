import React, { Component } from 'react';
import { connect } from 'react-redux';
import onClickOutside from 'react-onclickoutside';

import "react-datetime/css/react-datetime.css";
import "react-datepicker/dist/react-datepicker.css";

import Task from './Task/Task';
import EditTask from './EditTask/EditTask';
import './TaskList.css';
import * as actions from '../store/actions/actions';
import { NEW_TASK } from '../appConstants';

export class TaskList extends Component {

  state = {
    sortMode: "Blank",
    reverse: false
  }

  handleClickOutside = (event) => {
    this.props.onEditSelect('');
  }

  sortData = () => {
    let sortMode = this.state.sortMode;
    var sortable = [];
      for (var task in this.props.tasks) {
          sortable.push(this.props.tasks[task]);
      }

      let sortedList;
      sortedList = sortable.sort(function(a, b) {
        switch(sortMode){
          case "Priority": return a.priority - b.priority;
          case "ToDo": return a.todo.localeCompare(b.todo);
          case "DateEntered": return new Date(a.dateEntered).getTime() - new Date(b.dateEntered).getTime();
          case "DueDate": return new Date(a.dateDue).getTime() - new Date(b.dateDue).getTime();
          case "Status": return a.status.localeCompare(b.status);
        } 
      });

      if(this.state.reverse){
        return sortedList.reverse();
      }    
      
      return sortedList;   
  }

  setSortMode(sortMode){
    if(this.state.sortMode === sortMode){
      this.setState({reverse: !this.state.reverse});
    }else{
      this.setState({reverse: false});
    }
    this.setState({sortMode: sortMode});
  }


  render() {
    let sortedData = this.sortData();
    return (
      <div>
        <table className="bsClass">
          <colgroup>
            <col span='1' className="column" />
            <col span='1' className="column" />
            <col span='1' className="column" />
            <col span='1' className="column" />
            <col span='1' className="column" />
            <col span='1' className="buttonColumn" />
            <col span='1' className="buttonColumn" />
          </colgroup>
          <thead className="table-heading">
            <tr>
              <th onClick={() => this.setSortMode('Priority')}>Priority</th>
              <th onClick={() => this.setSortMode('ToDo')}>To Do</th>
              <th onClick={() => this.setSortMode('DateEntered')}>Date Entered</th>
              <th onClick={() => this.setSortMode('DueDate')}>Due Date</th>
              <th onClick={() => this.setSortMode('Status')}>Status</th>
            </tr>
          </thead>
          <tbody>
            <EditTask task={{ ...NEW_TASK }} isEditable={false} />          
              {
              sortedData.map(task => (
                task.key === this.props.editTaskKey
                ? <EditTask key={task.key} task={task} isEditable={true} />
                : <Task key={task.key} task={task} editTask={() => this.props.onEditSelect(task.key)} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    editTaskKey: state.editTaskKey
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEditSelect: (key) => dispatch(actions.selectEdit(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(TaskList));