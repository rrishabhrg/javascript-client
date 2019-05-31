/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class RadioGroup extends React.Component {
  render() {
    const {
      onChange, options, name, onBlur, error,
    } = this.props;
    if (!options) {
      return null;
    }
    const radioOptions = options.map(input => (
      <label htmlFor="id">
        <input type="radio" name={name} key={input.value} onChange={onChange} value={input.value} onBlur={onBlur} />
        {input.label}
        <br />
      </label>
    ));
    return (
      <React.Fragment>
        {radioOptions}
        <p style={{ color: 'red' }}>{ error }</p>
      </React.Fragment>
    );
  }
}

export default RadioGroup;
