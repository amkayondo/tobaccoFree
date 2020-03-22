import React from 'react'

import { 
    BrowserRouter,
    Link,
    Switch,
    Route
 } from 'react-router-dom';
import IndexPage from '../pages/IndexPage/IndexPage';

export default function IndexNavigation() {
    return (
        <BrowserRouter>
            <Switch>
           <Route path='/'
           component={IndexPage} exact={true} />
            </Switch>
        </BrowserRouter>
    )
}
