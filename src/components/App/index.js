// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Home from 'src/containers/pages/Home';
import Header from 'src/components/Header';
import Dashboard from 'src/containers/pages/Dashboard';
import GroupSettings from 'src/containers/pages/GroupSettings';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/pages/NotFound';

import { Switch, Route, Redirect } from 'react-router-dom';

import './styles.scss';

// == Composant
const App = ({ rehydrate, isLogged, isAdmin }) => {
  useEffect(() => {
    rehydrate();
  }, []);
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          {isLogged ? <Redirect to="/dashboard" exact /> : <Home />}
        </Route>
        <Route path="/dashboard" exact>
          {!isLogged ? <Redirect to="/" exact /> : <Dashboard />}
        </Route>
        <Route path="/group-settings" exact>
          {!isAdmin ? <Redirect to="/dashboard" exact /> : <GroupSettings />}
        </Route>
        <Route>
          <Header />
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  rehydrate: PropTypes.func,
};

App.defaultProps = {
  rehydrate: () => {},
};

// == Export
export default App;
