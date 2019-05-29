/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import style from './style';

class Button extends React.Component {
  render() {
    // const { error } = style;
    const { common } = style;
    const { value } = this.props;
    // if (error) {
    //   combine = {
    //     ...common,
    //     ...error,
    //   };
    // }
    const BtnOptions = value.map(input => (
      <input type="submit" value={input.label} key={input.value} style={{ ...common }} />
    ));
    return (
      <React.Fragment>
        { BtnOptions }
      </React.Fragment>
    );
  }
}

export default Button;
