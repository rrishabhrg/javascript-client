import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Trainee } from '../../../pages/Trainee';

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
          <Typography variant="h6" className={classes.title}>
            Trainee Portal
          </Typography>
          <Button color="inherit">TRAINEE</Button>
          <Button color="inherit">
            <Link to="/text-field-demo" style={{ color: 'white' }} activeStyle={{ color: 'red' }}>TEXTFIELD DEMO</Link>
          </Button>
          <Button color="inherit">
            <Link to="/input-demo" style={{ color: 'white' }} activeStyle={{ color: 'red' }}>INPUT DEMO</Link>
          </Button>
          <Button color="inherit">
            <Link to="/children-demo" style={{ color: 'white' }} activeStyle={{ color: 'red' }}>CHILDREN DEMO</Link>
          </Button>
          <Button color="inherit">LOGOUT</Button>
        </Toolbar>
      </AppBar>
      <Trainee className={classes.title} />
    </div>
  );
}
