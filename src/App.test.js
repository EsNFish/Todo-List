import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import {renderComponent, expect} from './test_helper';
import {shallow} from 'enzyme';
import {Task} from './TaskList/Task/Task';
import {TaskList} from './TaskList/TaskList';
import React from 'react';
import {expect} from 'chai';

Enzyme.configure({adapter: new Adapter()})
describe('Task', () =>{
    it('renders a thing', () =>{
        const newTaskKey = 1234;
        const task = {
            key: 1789,
            priority : 1,
            todo : "bob",
            dateEntered : new Date(),
            dateDue : new Date()
        }
        const component = shallow(<Task key={newTaskKey} task={task}/>);
        // componet.setProps({task, newTaskKey});
        console.log(component);
        // expect(component.todo).to.equal('bob');
    });
})