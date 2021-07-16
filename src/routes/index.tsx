import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Endereco from '../pages/Endereco';

const Routes: React.FC = () => (
  <Switch>
  <Route path="/" exact component={Dashboard} />
  <Route path="/endereco/:repository+" exact component={Endereco} />
  </Switch>
);

export default Routes;
