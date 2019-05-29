/* eslint-disable react/prop-types */
import React from 'react';
import style from './style';

const TextField = (props) => {
  const { isError, onChange } = props;
  const { error } = style;
  let { common } = style;
  if (isError) {
    common = {
      ...common,
      ...error,
    };
  }

  return (
    <input type="text" style={{ ...common }} error={error} onChange={onChange} />
  );
};

export default TextField;
