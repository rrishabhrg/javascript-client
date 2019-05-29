import React from 'react';
import { TextField } from '../../components';

const TextFieldDemo = () => (
  <React.Fragment>
    <div>
      <p><b>This is a Disabled Input</b></p>
      <TextField name="disable" placeholder="Disabled Input" disabled="true" />
    </div>

    <div>
      <p><b>A Valid Input</b></p>
      <TextField name="valid" placeholder="Accessible" />
    </div>

    <div>
      <p><b>An Input with errors</b></p>
      <TextField name="error" placeholder="101" isError="true" />
      <p>Could not be greater than</p>
    </div>
  </React.Fragment>
);

export default TextFieldDemo;
