import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import SignUpPage from '../SignUpPage';

configure({ adapter: new Adapter() });

describe('SIGNUP AUTH TESTS', () => {
  const wrapper = shallow(<SignUpPage />);
  it('should render the signup page', () => {
    expect(wrapper.find(".brht.kdfk")).to.have.lengthOf(1);
  });
  it('should navigate between pages', () => {
    expect(wrapper.exists(".asg")).to.equal(true);
  });
  it("should show create new account header", () => {
    expect(wrapper.exists(".jdsf")).to.be.equal(true);
  });
  it("should render the signup form", () => {
    expect(wrapper.find("form.sgnfn_dib")).to.have.lengthOf(1);
  });
  it("should render all signup inputs", () => {
    expect(wrapper.exists("input#sgnfn_inpt")).to.equal(true);
  });
  it("should render a signup button", () => {
    expect(wrapper.find("input.btnfm")).to.have.lengthOf(1);
    wrapper.find("input.btnfm").simulate("click");
    expect(wrapper.find("input.btnfm")).to.have.lengthOf(1);
  });
});
