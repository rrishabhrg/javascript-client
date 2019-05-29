/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import style from './style';

class SelectField extends React.Component {
  render() {
    const { onChange, options } = this.props;
    const dropDownOptions = options.map(option => (<option key={option}>{option}</option>));
    const { common } = style;
    return (
      <select name="sportType" onChange={onChange} style={{ ...common }}>
        {dropDownOptions}
      </select>
    );
  }
}

export default SelectField;
