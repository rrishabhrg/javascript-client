/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import { AddDialog } from './Components';

class Trainee extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <AddDialog />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Trainee;
