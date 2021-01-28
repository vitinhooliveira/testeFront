import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Main from './pages/main'
import Detalhes from './pages/detalhes'



const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path ='/products/:id' component={Detalhes} />
        </Switch>
    </BrowserRouter>
)

export default Routes