/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Email from '@material-ui/icons/Email';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { callApi } from '../../lib';
import { SnackbarHOC } from '../../Contexts';
import schema from './Schema';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '77%',
    marginTop: theme.spacing(1),
  },
  footer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
});

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    Errors: {},
    isTouch: [],
    btnDisabled: true,
    showPassword: false,
    redirect: false,
    loading: false,
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    }, this.validator);
  }

  handlePasswordChange = () => (event) => {
    this.setState({
      password: event.target.value,
    }, this.validator);
  }

  handleEmailTouch = () => {
    const { isTouch } = this.state;
    if (!isTouch.includes('email')) {
      isTouch.push('email');
    }
    this.setState({
      isTouch,
    }, this.validator);
  }

  handlePasswordTouch = () => {
    const { isTouch } = this.state;
    if (!isTouch.includes('password')) {
      isTouch.push('password');
    }
    this.setState({
      isTouch,
    }, this.validator);
  }

  hasErrors = (value) => {
    const { Errors } = this.state;
    return Errors[value] ? Errors[value] : '';
  }

  isTouch = (value) => {
    const { isTouch } = this.state;
    return isTouch.includes(value);
  }

  getErrors = (value) => {
    const { Errors } = this.state;
    if (this.isTouch(value) && this.hasErrors(value)) {
      return Errors[value];
    }
    return '';
  }

  validator = () => {
    const {
      email, password, btnDisabled,
    } = this.state;
    schema.validate({
      email, password,
    }, { abortEarly: false }).then(() => {
      this.setState({
        Errors: {},
        btnDisabled: false,
      });
      console.log(btnDisabled);
    }).catch((errors) => {
      const error = {};
      errors.inner.map((err) => {
        error[err.path] = err.message;
      });
      this.setState({
        Errors: error,
        btnDisabled: true,
      });
    });
  }

  handleClickShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({
      showPassword: !showPassword,
    });
  }

  handleOnSubmitLogin = async (event) => {
    event.preventDefault();
    const { value } = this.props;
    const {
      email, password,
    } = this.state;
    const data = {
      email,
      password,
    };
    const url = 'https://express-training.herokuapp.com/api/user/login';
    const method = 'post';
    try {
      const res = await callApi({ data, method, url });
      if (res) {
        localStorage.setItem('token', res.data.data);
        this.setState({
          redirect: true,
          loading: true,
        });
      } else {
        value.onOpenSnackbar('Invalid Credentials', 'Retry !!!! ');
      }
    } catch (error) {
      console.log('ERROR OCCURS---->', error);
    }
  }

  render() {
    const { classes } = this.props;
    const {
      showPassword, btnDisabled, redirect, loading,
    } = this.state;

    if (redirect) {
      return <Redirect to="/trainee" />;
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            LogIn
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              autoFocus
              fullWidth
              required
              id="email"
              name="email"
              label="Email Address"
              variant="outlined"
              margin="normal"
              autoComplete="email"
              onChange={this.handleEmailChange}
              onBlur={this.handleEmailTouch}
              error={!!this.getErrors('email')}
              helperText={this.getErrors('email')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              required
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              margin="normal"
              autoComplete="current-password"
              type={showPassword ? 'text' : 'password'}
              onChange={this.handlePasswordChange('password')}
              onBlur={this.handlePasswordTouch}
              error={!!this.getErrors('password')}
              helperText={this.getErrors('password')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton aria-label="Toggle password visibility" onClick={this.handleClickShowPassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={btnDisabled}
              onClick={this.handleOnSubmitLogin}
            >
              {loading ? <CircularProgress /> : 'LogIn'}
            </Button>
          </form>
          <Typography variant="body2" color="textSecondary" className={classes.footer} align="center">
            Copyright © 2019 Successive Technologies
          </Typography>
        </Paper>
      </Container>
    );
  }
}

export default SnackbarHOC(withStyles(styles)(Login));
