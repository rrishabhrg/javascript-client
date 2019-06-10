/* eslint-disable react/prop-types */
import React from 'react';

class Math extends React.Component {
  calculator = (first, second, operator) => {
    switch (operator) {
    case '+': {
      const add = first + second;
      return add;
    }
    case '-': {
      const diff = first - second;
      return diff;
    }
    case '*': {
      const mult = first * second;
      return mult;
    }
    case '/': {
      if (second === 0) {
        return 'Infinity';
      }
      return first / second;
    }
    default: return 'Invalid Operator !!';
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
