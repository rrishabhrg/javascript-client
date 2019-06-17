/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import theme from './theme';
import {
  ChildrenDemo, InputDemo, Login, Trainee, Navbar, TextFieldDemo, SliderDemo, NoMatch,
} from './pages';

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
      // DAY-11  &   DAY-12
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route path="/trainee" component={Trainee} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/text-field-demo" component={SliderDemo} />
            <Route exact path="/input-demo" component={InputDemo} />
            <Route exact path="/children-demo" component={ChildrenDemo} />
            <Route exact path="/" component={Navbar} />
            <Route path="" component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
