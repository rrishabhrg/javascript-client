/* eslint-disable react/prop-types */
import React from 'react';
import style from './style';

const TextField = (props) => {
  const {
    onChange, onBlur, error,
  } = props;
  const { errorStyle, common } = style;
  // eslint-disable-next-line no-unused-vars
  let { combine } = style;
  if (!error) {
    combine = {
      ...common,
      ...error,
    };
  }

  return (
    <React.Fragment>
      <input type="text" onChange={onChange} onBlur={onBlur} style={{ ...common }} error={errorStyle} />
      <p style={{ color: 'red' }}>{ error }</p>
    </React.Fragment>
  );
};

export default TextField;
