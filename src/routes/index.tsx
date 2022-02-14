import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Atualizar from '../pages/Atualizar';
import Cadastrar from '../pages/Cadastrar';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/atualizar/:id+/:nome+" exact component={Atualizar} />
    <Route path="/cadastrar" exact component={Cadastrar} />
  </Switch>
);

export default Routes;
