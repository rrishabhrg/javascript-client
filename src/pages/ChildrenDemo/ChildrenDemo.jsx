/* eslint-disable react/no-children-prop */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Math from '../../components/Math/Math';
import { Template } from './Template';

class ChildrenDemo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Math first={7} second={0} operator="/">
          {Template}
        </Math>
        <Math first={1} second={2} operator="-">
          {Template}
        </Math>
        <Math first={1} second={2} operator="*">
          {Template}
        </Math>
        <Math first={1} second={2} operator="/">
          {Template}
        </Math>
        <Math first={1} second={0} operator="/">
          {Template}
        </Math>
        <Math first={1} second={2} operator="^">
          {Template}
        </Math>
      </React.Fragment>
    );
  }
}

export default ChildrenDemo;
