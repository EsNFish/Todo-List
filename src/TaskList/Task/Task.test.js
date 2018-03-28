import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount} from 'enzyme';
import {Task} from './Task';
import React from 'react';
import {expect} from 'chai';
import moment from 'moment';

Enzyme.configure({adapter: new Adapter()})
describe('Task', () =>{
    it('creates a proper task', () =>{
        const date = new Date();
        const newTaskKey = 1234;
        const task = {
            key: 1789,
            priority : 1,
            todo : "bob",
            dateEntered : date,
            dateDue : date,
            status : 'completed'
        }
        const component = mount(<Task key={newTaskKey} task={task}/>);
        expect(component.find('td').length).equal(5);
        expect(component.find('td').at(0).text()).to.equal('1');
        expect(component.find('td').at(1).text()).to.equal('bob');
        expect(component.find('td').at(2).text()).to.equal(moment(date).format("Do MMM YYYY"));
        expect(component.find('td').at(3).text()).to.equal(moment(date).format("Do MMM YYYY"));
        expect(component.find('td').at(4).text()).to.equal('completed');
    });
})