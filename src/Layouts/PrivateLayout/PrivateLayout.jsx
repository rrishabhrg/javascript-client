import React from 'react';
import { Navbar } from '../../pages';

const PrivateLayout = ({ children, ...rest }) => {
  return (
    <div className="page page-login">
      <Navbar />
      <div className="main">{children}</div>
    </div>
  );
};

export default PrivateLayout;
