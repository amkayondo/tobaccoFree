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
            <Route exact path="/xd" component={IndexPage}/>
            <Route path="/map" component={MapPage}/>
            </Switch>
        </BrowserRouter>
    )
}
