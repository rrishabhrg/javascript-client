/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class RadioGroup extends React.Component {
  render() {
    const { onChange, options, name } = this.props;
    if (!options) {
      return null;
    }
    const radioOptions = options.map(input => (
      <label>
        <input type="radio" name={name} key={input.value} onChange={onChange} />
        {input.label}
        <br />
      </label>
    ));
    return (
      <React.Fragment>
        {radioOptions}
      </React.Fragment>
    );
  }
}

export default RadioGroup;
