import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import SignInPage from '../SignInPage'

describe("AUTH TESTS", () => {
    const wrapper = shallow(<SignInPage/>);
    
    it('It should render auth page', () => {
        expect(wrapper.find(".auth_lad").exists()).to.equal(true)
    });
});
