import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import {renderComponent, expect} from './test_helper';
import {shallow, mount} from 'enzyme';
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
            dateDue : new Date(),
            status : 'completed'
        }
        const component = mount(<Task key={newTaskKey} task={task}/>);
        const date = new Date();
        // componet.setProps({task, newTaskKey});
        expect(component.find('td').at(0).text()).to.equal('1');
        expect(component.find('td').at(1).text()).to.equal('bob');
        // expect(component.find('td').at(2).text()).to.equal({date});
        // expect(component.find('td').at(3).text()).to.equal({date});
        expect(component.find('td').at(4).text()).to.equal('completed');
    });
})