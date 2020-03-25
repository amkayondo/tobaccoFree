import React, { Component } from 'react'
import NavSwitcher from './app/navigation/NavSwitcher';
import AuthContext from './context/AuthContext';

export default class index extends Component {
    render() {
        return (
        <AuthContext>
        <NavSwitcher />
        </AuthContext>);

    }
}
