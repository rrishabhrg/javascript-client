/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { InputDemo } from './pages';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="root">
          <InputDemo />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
