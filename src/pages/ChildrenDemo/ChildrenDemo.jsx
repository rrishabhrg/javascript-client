/* eslint-disable react/no-children-prop */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Math from '../../components/Math/Math';
import { Template } from './Template';
import { Template1 } from './Template1';
import { Template2 } from './Template2';

class ChildrenDemo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Math first={7} second={4} operator="+">
          {Template}
        </Math>
        <Math first={10} second={3} operator="-">
          {Template}
        </Math>
        <Math first={7} second={2} operator="*">
          {Template}
        </Math>
        <Math first={24} second={4} operator="/">
          {Template}
        </Math>
        <Math first={7} second={0} operator="/">
          {Template}
        </Math>
        <Math first={7} second={8} operator="^">
          {Template}
        </Math>
        <Math first={2} second={0} operator="-">
          {Template1}
        </Math>
        <Math first={2} second={0} operator="/">
          {Template2}
        </Math>
      </React.Fragment>
    );
  }
}

export default ChildrenDemo;
