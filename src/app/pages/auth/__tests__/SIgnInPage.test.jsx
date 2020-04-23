import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SignInPage from '../SignInPage';

describe("SIGNUP AUTH PAGE", () => {
  const wrapper = shallow(<SignInPage />);
  it('It should link to another page', () => {
    expect(wrapper.find("#acd").exists()).to.equal(true);
  });
  it('It should link to index auth page', () => {
    expect(wrapper.find(".bckda").exists()).to.equal(true);
  });
  it('It should load form for input', () => {
    expect(wrapper.find("form.sgnfn_dib").exists()).to.equal(true);
  });
  it('It should load form input',
    () => {
      expect(wrapper.find("input#sgnfn_inpt").exists()).to.equal(true);
    });
});
