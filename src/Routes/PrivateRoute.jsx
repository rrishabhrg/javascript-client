/* eslint-disable arrow-parens */
import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateLayout } from '../Layouts';

const PrivateRoute = ({ component: Component, ...rest }) => {
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
