/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Trainee } from '../../Trainee';
import { Link } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles(theme => ({
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
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
          Trainee Portal
          </Typography>
          <Button color="inherit">TRAINEE</Button>
          <Button color="inherit" style={{ cursor: 'pointer' }}>
          TEXTFIELD DEMO
          </Button>
          <Button color="inherit">
          INPUT DEMO
          </Button>
          <Button color="inherit">
          CHILDREN DEMO
          </Button>
          <Button color="inherit">LOGOUT</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
