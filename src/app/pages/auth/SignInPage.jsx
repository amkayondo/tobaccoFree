import React, { Component } from 'react'
import SignInField from '../../components/auth/SignInField'
import '../../assets/css/auth.css';
import { Container } from 'gestalt'

export default class SignInPage extends Component {
    render() {
        return (
            <div className="auth_lad">
                <Container>
                <SignInField/>
                </Container>
            </div>
        )
    }
}
