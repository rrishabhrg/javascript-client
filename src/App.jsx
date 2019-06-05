/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  BrowserRouter, Switch,
} from 'react-router-dom';
import theme from './theme';
import { PrivateRoute } from './Routes';
import { ChildrenDemo, InputDemo, Login, Trainee, Navbar } from './pages';

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
      // <MuiThemeProvider theme={theme}>
      //   <React.Fragment>
      //     <CssBaseline />
      //     <div id="root">
      //       {/* <Login /> */}
      //       <Navbar />
      //     </div>
      //   </React.Fragment>
      // </MuiThemeProvider>
      // DAY-11
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <Switch>
            {/* <Route exact path="/child" component={ChildrenDemo} /> */}
            {/* <Route exact path="/" component={Login} /> */}
            {/* <AuthRoute /> */}
            <PrivateRoute path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
