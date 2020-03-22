import React, { Component } from 'react'
import { Text } from 'gestalt'

export default class SignInField extends Component {
    render() {
        return (
            <div>
                <Text>
                <div>signin</div>
                </Text>
                <input
                className='ph_inpt'
                type="tel" name="" id=""/>
            </div>
        )
    }
}
