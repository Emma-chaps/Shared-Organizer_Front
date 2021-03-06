// == Import npm
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from 'src/components/ProtectedRoute';
import PropTypes from 'prop-types';
import Home from 'src/containers/pages/Home';
import Dashboard from 'src/containers/pages/Dashboard';
import NotFound from 'src/components/pages/NotFound';

// == Composant
const App = ({ rehydrate, isLogged }) => {
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
          exact
          component={Dashboard}
          isAuth={isLogged}
        />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

App.propTypes = {
  rehydrate: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default App;
