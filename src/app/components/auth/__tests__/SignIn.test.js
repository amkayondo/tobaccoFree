import React from 'react'
import { describe, it } from 'mocha'
import { shallow, configure } from 'enzyme'
import SignIn from '../SignIn'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

describe("SIGNIN TESTS", () =>{
    const wrapper = shallow(<SignIn/>);
    it("should show signin text", () => {
        expect(wrapper.find("div div").text("signin"))
    });
    
})