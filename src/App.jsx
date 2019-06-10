/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// import { InputDemo } from './pages';
import { ThemeProvider } from '@material-ui/styles';
import { ChildrenDemo } from './pages/ChildrenDemo';
import theme from './theme';

class App extends React.Component {
  render() {
    return (
      // <React.Fragment>
      //   <div id="root">
      //     <InputDemo />
      //   </div>
      // </React.Fragment>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <div id="root">
            <ChildrenDemo />
          </div>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
