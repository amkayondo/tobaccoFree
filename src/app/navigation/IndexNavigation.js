import React from 'react'

import { 
    BrowserRouter,
    Link,
    Switch,
    Route
 } from 'react-router-dom';
import IndexPage from '../pages/IndexPage/IndexPage';
import MapPage from '../pages/MapPage/MapPage';


export default function IndexNavigation() {
    return (
        <BrowserRouter>
            <Switch>
            <Route  path="/xd">
            <IndexPage/>
            </Route>
            <Route path="/map">
            <MapPage/>    
            </Route>/>
            </Switch>
        </BrowserRouter>
    )
}
