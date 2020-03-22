import React, { useState, useEffect } from 'react'
import LoggedInNav from './LoggedInNav'
import LoggedOutNav from './LoggedOutNav'
import SplashScreen from '../pages/shared/SplashScreen';

const authToken = null;

export default function NavSwitcher() {
    const [state] = useState({ display: 'block' })
    const switchComponents = () => {
        setTimeout(() => {
            <SplashScreen/>
        }, 50)
        if(authToken === null){
            return <SplashScreen/>   
        }
        return <LoggedInNav/>
    }
    return (
        <div>
          {
             switchComponents()
          }
        </div>
    )
}
