import React from 'react';
import { Navbar } from '../../pages';

const PrivateLayout = ({ children, ...rest }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default PrivateLayout;
