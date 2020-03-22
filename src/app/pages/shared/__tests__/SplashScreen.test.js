import React from 'react'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
import SplashScreen from '../SplashScreen'

configure({ adapter: new Adapter() });

describe('SPLASH SCREEN', () => {
    const wrapper = shallow(<SplashScreen/>);
    it('should render loader page', () => {
        expect(wrapper.is('.loaderdiv')).to.equal(true);
    })
    it('should render spinner loader', () => {
        expect(wrapper.find('#loadericon')).to.have.lengthOf(1);
    })
})
