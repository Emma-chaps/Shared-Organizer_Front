// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Home from 'src/containers/pages/Home';
import Dashboard from 'src/containers/pages/Dashboard';
import GroupSettings from 'src/containers/pages/GroupSettings';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/pages/NotFound';

import { Switch, Route } from 'react-router-dom';

import './styles.scss';

// == Composant
const App = ({ rehydrate }) => {
  useEffect(() => {
    rehydrate();
  }, []);
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Route path="/group-settings" exact>
          <GroupSettings />
        </Route>
        <Route>
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
