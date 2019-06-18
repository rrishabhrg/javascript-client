/* eslint-disable react/prefer-stateless-function */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */

import React from 'react';

const withLoaderAndMessage = (TableDemo) => (props) => {
  class HOC extends React.Component {
    render() {
      return (<TableDemo {...props} loader dataLength={} />);
    }
  }
  return HOC;
};

export default withLoaderAndMessage;
