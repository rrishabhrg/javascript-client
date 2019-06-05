/* eslint-disable react/prop-types */
import React from 'react';
import style from './style';

const TextField = (props) => {
  const {
    onChange, onBlur, error,
  } = props;
  const { errorStyle, common } = style;
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


// import React from 'react';
// import style from './style';

// const TextField = (props) => {
//   const { disabled, placeholder, isError } = props;
//   const { error } = style;
//   let { common } = style;
//   if (isError) {
//     common = {
//       ...common,
//       ...error,
//     };
//   }
//   return (
//     <input type="text" placeholder={placeholder} disabled={disabled} style={{ ...common }} />
//   );
// };

// export default TextField;
