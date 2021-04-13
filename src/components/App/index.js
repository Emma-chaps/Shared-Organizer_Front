// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Home from 'src/components/pages/Home';

// == Import
import './styles.scss';

// == Composant
const App = ({ rehydrate }) => {
  useEffect(() => {
    rehydrate();
  }, []);
  return (
    <div className="app">
      <h1>Composant : App</h1>
      <Home />
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
