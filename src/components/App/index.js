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

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './styles.scss';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto',
  },
  overrides: {
    MuiButton: {
      root: {
        background: 'linear-gradient(35deg, #8BC6DC 60%, #FFFFFF 95%)',
        fontWeight: '300',
        color: 'white',
        fontSize: '0.7em',
        letterSpacing: '0.5px',
      },
    },
  },
});

// == Composant
const App = ({ rehydrate, isLogged, isAdmin }) => {
  useEffect(() => {
    rehydrate();
  }, [isLogged]);

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
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
