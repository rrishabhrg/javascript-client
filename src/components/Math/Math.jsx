/* eslint-disable react/prop-types */
import React from 'react';

class Math extends React.Component {
  calculator = (first, second, operator) => {
    switch (operator) {
    case '+': return first + second;
    case '-': return first - second;
    case '*': return first * second;
    case '/': return (second === 0) ? 'infinity' : first / second;
    default: return 'Invalid Operator';
    }
  }

  render() {
    const {
      first, second, operator, children,
    } = this.props;
    const temp = this.calculator(first, second, operator);
    return (
      React.cloneElement(children(temp, first, second, operator))
    );
  }
}

export default Math;
