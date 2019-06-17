/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthLayout } from '../Layouts';

const AuthRoute = ({ component: Component, ...rest }) => {
  const isToken = localStorage.getItem('token');
  if (isToken) {
    return (
      <Redirect to="/trainee" />
    );
  }
  return (
    <Route
      {...rest}
      render={matchProps => (
        <AuthLayout>
          <Component
            {...matchProps}
          />
        </AuthLayout>
      )}
    />
  );
};

export default AuthRoute;
