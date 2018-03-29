import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount, render} from 'enzyme';
import {EditTask} from './EditTask';
import React from 'react';
import {expect} from 'chai';
import moment from 'moment';
import {FormControl} from 'react-bootstrap';
import {Component} from 'react';

Enzyme.configure({adapter: new Adapter()})
describe('EditTask', () =>{

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
         component = shallow(<EditTask key={newTaskKey} task={task} isEditable={true}/>);
    });

    it('has a tr', ()  => {
        expect(component.find('tr').length).equal(1);
    });

    it('has a tr with 7 tds', () => {
        expect((component.find('tr').at(0)).find('td').length).equal(7);
    });

    it('has a td of length 7', () => {
        expect(component.find('td').length).equal(7);
    });

    it('has the proper values', () =>{
        expect(component.find(FormControl).at(0).dive().props()).to.have.property('value', 1);
        expect(component.find('td').at(1).find('ContentEditable').props()).to.have.property('html', "bob");
        expect(component.find('td').at(2).text()).to.equal(moment(date).format("Do MMM YYYY"));
        // console.log(component.find('td').at(3).dive().debug());
        // expect(component.find('td').at(3).dive().props()).to.have.property('value', moment(date).format("Do MMM YYYY"));
        // expect(component.find('td').at(3).find("dateFormat").props()).to.have.property(moment(date).format("Do MMM YYYY"));
        expect(component.find(FormControl).at(1).dive().props()).to.have.property('value', 'completed');
        expect(component.find('td').at(5).find("Button").props()).to.have.property('bsStyle', "success");
        expect(component.find('td').at(6).find("Button").props()).to.have.property('bsStyle', "danger");
    });

    
})