/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Typography } from '@material-ui/core';

export const Template = (value, first, second, operator) => (
  <>
    <Typography>
      <p>
        {first}
        {operator}
        {second}
        =
        {value}
      </p>
    </Typography>
  </>
);

export default Template;
