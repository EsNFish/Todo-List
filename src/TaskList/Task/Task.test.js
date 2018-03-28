import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount} from 'enzyme';
import {Task} from './Task';
import React from 'react';
import {expect} from 'chai';
import moment from 'moment';

Enzyme.configure({adapter: new Adapter()})
describe('Task', () =>{

    let date;
    let newTaskKey;
    let task;
    let component;

    beforeEach(() => {
         date = new Date();
         newTaskKey = 1234;
         task = {
            key: 1789,
            priority : 1,
            todo : "bob",
            dateEntered : date,
            dateDue : date,
            status : 'completed'
        }
         component = shallow(<Task key={newTaskKey} task={task}/>);
    });

    it('has a tr', ()  => {
        expect(component.find('tr').length).equal(1);
    });

    it('has a tr with 5 tds', () => {
        expect((component.find('tr').at(0)).find('td').length).equal(5);
    });

    it('has a td of length 5', () => {
        expect(component.find('td').length).equal(5);
    });

    it('has the proper values', () =>{
        expect(component.find('td').at(0).text()).to.equal('1');
        expect(component.find('td').at(1).text()).to.equal('bob');
        expect(component.find('td').at(2).text()).to.equal(moment(date).format("Do MMM YYYY"));
        expect(component.find('td').at(3).text()).to.equal(moment(date).format("Do MMM YYYY"));
        expect(component.find('td').at(4).text()).to.equal('completed');
    });

    
})