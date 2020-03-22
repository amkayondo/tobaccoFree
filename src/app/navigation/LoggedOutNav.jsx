import React from 'react'

import { 
    BrowserRouter,
    Link,
    Switch,
    Route
 } from 'react-router-dom';
import SignInPage from '../pages/auth/SignInPage';


export default function IndexNavigation() {
    return (
        <BrowserRouter>
            <Switch>
           <Route path='/'
           component={SignInPage}
           exact={true} />
            </Switch>
        </BrowserRouter>
    )
}
