/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Typography } from '@material-ui/core';

export const Template2 = (value, first, second) => (
  <>
    <Typography>
      <p>
        When we divide {first} with {second} we get {value}
      </p>
    </Typography>
  </>
);

export default Template2;
