/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { TextField, Typography } from '@material-ui/core';

export const Template = value => (
  <Typography>
    <TextField
      id="standard-uncontrolled"
      label="RESULT"
      value={value}
      margin="normal"
    />
  </Typography>
);

export default Template;
