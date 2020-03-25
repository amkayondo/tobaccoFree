import React, { createContext, useState, Component } from 'react'

const MyContext = createContext();

export default class AuthContext extends Component {
    state = (
        {
            name: "kayondo",
            age: 23
        }
    )
    render() {
        return (
        <MyContext.Provider value='jhgttfhjkjiugty'>
            { this.props.children  }
        </MyContext.Provider>
        )
    }
}
