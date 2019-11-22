import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Pokemons from './containers/Pokemons';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/pokemons' component={Pokemons} />
        </Switch>
    );
};

export default Routes;


