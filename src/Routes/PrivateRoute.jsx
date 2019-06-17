/* eslint-disable no-else-return */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PrivateLayout } from '../Layouts';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isToken = localStorage.getItem('token');
  if (!isToken) {
    return (
      <Redirect to="/login" />
    );
  }
  return (
    <Route
      {...rest}
      render={matchProps => (
        <PrivateLayout>
          <Component
            {...matchProps}
          />
        </PrivateLayout>
      )}
    />
  );
};

export default PrivateRoute;
