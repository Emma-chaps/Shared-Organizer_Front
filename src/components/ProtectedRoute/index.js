/* eslint-disable arrow-body-style */
/* eslint-disable brace-style */
/* eslint-disable no-else-return */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isAuth: isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.elementType.isRequired,
};

ProtectedRoute.defaultProps = {};

export default ProtectedRoute;
