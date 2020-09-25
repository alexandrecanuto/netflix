import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Pages
import { Home, Internal } from './pages';

const Routes = ({ className }) => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv-shows" exact component={Internal} />
    </Switch>  
  );
};

export default Routes;
