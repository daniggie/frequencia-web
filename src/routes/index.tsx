import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Atualizar from '../pages/Atualizar';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/aluno/:repository+" exact component={Atualizar} />
  </Switch>
);

export default Routes;
