import React from 'react';
import { TextField } from '../../components/TextField';

const TextFieldDemo = () => (
  <React.Fragment>
    <div>
      <p><b>This is a Disabled Input</b></p>
      <TextField name="disable" disabled="true" placeholder="Disabled Input" />
    </div>

    <div>
      <p><b>A Valid Input</b></p>
      <TextField name="valid" placeholder="Accessible" />
    </div>

    <div>
      <p><b>An Input with errors</b></p>
      <TextField name="error" isError="true" placeholder="101" />
      <p>Could not be greater than</p>
    </div>
  </React.Fragment>
);
export default TextFieldDemo;
