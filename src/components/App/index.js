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
          <Home />
        </Route>
        {isLogged ? (
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
        ) : (
          <Redirect to="/" exact />
        )}
        {isAdmin ? (
          <Route path="/group-settings" exact>
            <GroupSettings />
          </Route>
        ) : (
          <Redirect to="/dashboard" exact />
        )}
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
