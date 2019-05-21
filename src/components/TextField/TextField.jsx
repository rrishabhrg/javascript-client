/* eslint-disable react/prop-types */
import React from 'react';
import style from './style';

const TextField = (props) => {
  const { disabled, placeholder, isError } = props;
  const { error } = style;
  let { common } = style;
  if (isError) {
    common = {
      ...common,
      ...error,
    };
  }
  return (
    <input type="text" placeholder={placeholder} disabled={disabled} style={{ ...common }} />
  );
};

export default TextField;
