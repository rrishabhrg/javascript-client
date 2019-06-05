// const AuthRoute = ({component: Component, ...rest}) => {
//   return (
//     <Route {...rest} render={matchProps => (
//       <LoginLayout>
//           <Component {...matchProps} />
//       </LoginLayout>
//     )} />
//   )
// };

// export default AuthRoute;

import React from 'react';
import { Route } from 'react-router-dom';
import { AuthLayout } from '../Layouts';

const AuthRoute = ({ component: Component, ...rest }) => {
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
