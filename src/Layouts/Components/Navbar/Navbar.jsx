/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    marginTop: '20px',
    marginLeft: '20px',
  },
});

class NavBar extends React.Component {
  state = {
    redirect: false,
    redirectTrainee: false,
  }

  handleClickTrainee = () => {
    this.setState({
      redirectTrainee: true,
    });
  }

  handleOnSubmitLogout = () => {
    localStorage.removeItem('token');
    this.setState({
      redirect: true,
    });
  };

  render() {
    const { redirect, redirectTrainee } = this.state;

    if (redirectTrainee) {
      return <Redirect to="/login" />;
    }

    if (redirect) {
      return <Redirect to="/trainee" />;
    }

    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              Trainee Portal
            </Typography>
            <Button color="inherit" onClick={this.handleClickTrainee}>TRAINEE</Button>
            <Button color="inherit">
              <Link to="/text-field-demo" style={{ color: 'white', textDecoration: 'none' }}>TEXTFIELD DEMO</Link>
            </Button>
            <Button color="inherit">
              <Link to="/input-demo" style={{ color: 'white', textDecoration: 'none' }}>INPUT DEMO</Link>
            </Button>
            <Button color="inherit">
              <Link to="/children-demo" style={{ color: 'white', textDecoration: 'none' }}>CHILDREN DEMO</Link>
            </Button>
            <Button color="inherit" onClick={this.handleOnSubmitLogout}>LOGOUT</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
