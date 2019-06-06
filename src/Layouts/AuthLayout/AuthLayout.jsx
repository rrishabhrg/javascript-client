import React from 'react';

const AuthLayout = ({ children, ...rest }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
