import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import IndexAuthPage from '../IndexAuthPage'

configure({ adapter: new Adapter() });

describe('INDEX AUTH PAGE', () => {
    const wrapper = shallow(<IndexAuthPage/>);
    it('should render auth index page', () => {
        expect(wrapper.find(".brht")).to.have.lengthOf(1)
    })
    it('should render app logo', () => {
        expect(wrapper.find(".txtjd")).to.have.lengthOf(1)
    });
    it('should show show reports link', () => {
        expect(wrapper.find(".shdf").exists()).to.equal(true)
    });
    it('should render signin button', () => {
        expect(wrapper.find(".btn.fs").exists()).to.equal(true)
    });
})