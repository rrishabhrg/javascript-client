/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import {
  Login, Navbar,
} from './pages';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <div id="root">
            {/* <Login /> */}
            <Navbar />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
