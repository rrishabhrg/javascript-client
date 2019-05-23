/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { TextFieldDemo, SliderDemo } from './pages';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="root">
          <SliderDemo />
        </div>
        <div id="root">
          <TextFieldDemo />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
