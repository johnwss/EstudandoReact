import React from 'react';
import { Switch, Route ,BrowserRouter } from 'react-router-dom';

import Repositorios from './pages/Repositores';
import Home from './pages/Home';

function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/repositorios' component={Repositorios}/>
        </Switch>
        </BrowserRouter>
    )

}

export default Routes;

