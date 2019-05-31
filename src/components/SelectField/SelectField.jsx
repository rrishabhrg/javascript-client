/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import style from './style';

class SelectField extends React.Component {
  render() {
    const {
      onChange, options, error, onBlur,
    } = this.props;
    const dropDownOptions = options.map(option => (<option key={option}>{option}</option>));
    const { common } = style;
    return (
      <React.Fragment>
        <select name="sportType" onChange={onChange} style={{ ...common }} onBlur={onBlur}>
          {dropDownOptions}
        </select>
        <p style={{ color: 'red' }}>{ error }</p>
      </React.Fragment>
    );
  }
}

export default SelectField;
