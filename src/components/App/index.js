// == Import npm
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from 'src/components/ProtectedRoute';
import PropTypes from 'prop-types';
import Home from 'src/containers/pages/Home';
import Dashboard from 'src/containers/pages/Dashboard';
import GroupSettings from 'src/containers/pages/GroupSettings';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/pages/NotFound';

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
        <ProtectedRoute
          path="/dashboard"
          component={Dashboard}
          isAuth={isLogged}
        />
        <ProtectedRoute
          path="/group-settings"
          component={GroupSettings}
          isAuth={isAdmin}
        />
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
