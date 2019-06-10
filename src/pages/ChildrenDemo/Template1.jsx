/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Typography } from '@material-ui/core';

export const Template1 = (value, first, second) => (
  <>
    <Typography>
      <p>
        Difference of {first} and {second} is {value}
      </p>
    </Typography>
  </>
);

export default Template1;
