import React, { Component } from 'react'
import SignInField from '../../components/auth/SignInField'

export default class SignInPage extends Component {
    render() {
        return (
            <div className="auth_lad">
                <SignInField/>
            </div>
        )
    }
}
