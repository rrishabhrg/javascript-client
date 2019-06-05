/* eslint-disable arrow-parens */
import React from 'react';
import { Route } from 'react-router-dom';
import { Login } from '../pages';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Login>
          <Component
            {...matchProps}
          />
        </Login>
      )}
    />
  );
};


// const PrivateRoute = props => {
//   console.log('PROPS value is: ', props);
//   return (
//     <div>Hello INDIA !!!!!</div>
//   );
// };

export default PrivateRoute;
