import React from 'react'
import { describe, it } from 'mocha'
import { shallow, configure } from 'enzyme'
import SignInField from '../SignInField'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

describe("SIGNIN TESTS", () =>{
    const wrapper = shallow(<SignInField/>);
    it("should show signin text", () => {
        expect(wrapper.find("div div").text("signin"))
    });
    it('it should show the phone number input', () => {
        expect(wrapper.exists('.ph_inpt')).to.equal(true);
    });
})