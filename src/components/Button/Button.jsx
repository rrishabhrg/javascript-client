/* eslint-disable import/no-duplicates */
/* eslint-disable jsx-quotes */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Buttons extends React.Component {
  render() {
    const { style, value, disabled } = this.props;
    return (
      <React.Fragment>
        <input type='submit' value={value} style={style} disabled={disabled} />
      </React.Fragment>
    );
  }
}

export default Buttons;
