/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  BrowserRouter, Switch,
} from 'react-router-dom';
import theme from './theme';
import {
  Login, Navbar,
} from './pages';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <AuthRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Navbar} />
            <PrivateRoute exact path="/text-field-demo" component={SliderDemo} />
            <PrivateRoute exact path="/input-demo" component={InputDemo} />
            <PrivateRoute exact path="/children-demo" component={ChildrenDemo} />
            <AuthRoute path="" component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
