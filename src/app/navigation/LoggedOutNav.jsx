import React from 'react'

import { 
    BrowserRouter,
    Link,
    Switch,
    Route
 } from 'react-router-dom';
import SignInPage from '../pages/auth/SignInPage';
import SignUpPage from '../pages/auth/SignUpPage';
import IndexAuthPage from '../pages/auth/IndexAuthPage';


export default function IndexNavigation() {
    return (
        <BrowserRouter>
            <Switch>
            <Route path='/'
           component={IndexAuthPage}
           exact />
           <Route path='/login'
           component={SignInPage}
           />
           <Route path='/signup'
           component={SignUpPage}
            />
            </Switch>
        </BrowserRouter>
    )
}
