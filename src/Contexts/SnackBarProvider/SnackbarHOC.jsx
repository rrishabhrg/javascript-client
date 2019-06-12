/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
import React from 'react';
import { MyContext } from './SnackbarProvider';

export function SnackbarHOC(Component) {
  return function WrapperComponent(props) {
    return (
      <MyContext.Consumer>
        {
          contextData => {
            return (<Component {...props} {...contextData} />);
          }
        }
      </MyContext.Consumer>
    );
  };
}
