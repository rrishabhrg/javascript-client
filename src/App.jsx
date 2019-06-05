/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { InputDemo } from './pages';
// import { ChildrenDemo } from './pages';
// import { Trainee } from './pages';
// import { Login } from './pages';
import { Navbar } from './pages';
import theme from './theme';

class App extends React.Component {
  render() {
    return (
      // DAY-7
      // <React.Fragment>
      //   <div id="root">
      //     <InputDemo />
      //   </div>
      // </React.Fragment>
      // DAY-8
      // <MuiThemeProvider theme={theme}>
      //   <React.Fragment>
      //     <div id="root">
      //       <ChildrenDemo />
      //     </div>
      //   </React.Fragment>
      // </MuiThemeProvider>
      // DAY-9
      // <MuiThemeProvider theme={theme}>
      //   <React.Fragment>
      //     <div id="root">
      //       <Trainee />
      //     </div>
      //   </React.Fragment>
      // </MuiThemeProvider>
      // DAY-10
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
