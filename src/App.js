import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LoginFrom from './component/login/LoginFrom';
import DashboardContainer from './component/dashboard/DashboardContainer';
import SearchContainer from './component/search/SearchContainer';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={LoginFrom} />
      <Route path='/dashboard' component={DashboardContainer} />
      <Route path='/search/:currentItem' render={(props) => <SearchContainer {...props} />} />
    </Switch>
  );
}

export default App;
