/* eslint-disable no-console */
/* eslint-disable array-callback-return */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Email from '@material-ui/icons/Email';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Grid from '@material-ui/core/Grid';
import schema from '../Schema';

class AddDialog extends React.Component {
  state = {
    name: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
    open: false,
    Errors: {},
    isTouch: [],
    btnDisabled: true,
  }

  handleClickOpen = () => {
    const { open } = this.state;
    console.log('value of OPEN is: ', open);
    this.setState({
      open: true,
    });
  }

  handleClose = () => {
    const { open } = this.state;
    console.log('value of CLOSE is: ', open);
    this.setState({
      open: false,
      Errors: {},
    });
  }

  handleNameChange = (event) => {
    const { name } = this.state;
    this.setState({
      name: event.target.value,
    }, this.validator);
    console.log('value of NAME is: ', name);
  }

  handleEmailChange = (event) => {
    const { emailAddress } = this.state;
    this.setState({
      emailAddress: event.target.value,
    }, this.validator);
    console.log('value of EMAIL is: ', emailAddress);
  }

  handlePasswordChange = () => (event) => {
    const { password } = this.state;
    this.setState({
      password: event.target.value,
    }, this.validator);
    console.log('value of Password is: ', password);
  }

  handleConfirmPasswordChange = () => (event) => {
    const { confirmPassword } = this.state;
    this.setState({
      confirmPassword: event.target.value,
    }, this.validator);
    console.log('value of Confirm-Password is: ', confirmPassword);
  }

  handleClickShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({
      showPassword: !showPassword,
    });
    console.log('value of Show-Password is: ', showPassword);
  }

  handleClickShowConfirmPassword = () => {
    const { showConfirmPassword } = this.state;
    this.setState({
      showConfirmPassword: !showConfirmPassword,
    });
    console.log('value of Show-Confirm-Password is: ', showConfirmPassword);
  }

  handleNameTouch = () => {
    const { isTouch } = this.state;
    if (!isTouch.includes('name')) {
      isTouch.push('name');
    }
    this.setState({
      isTouch,
    }, this.validator);
  }

  handleEmailTouch = () => {
    const { isTouch } = this.state;
    if (!isTouch.includes('emailAddress')) {
      isTouch.push('emailAddress');
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

  handlePasswordChangeTouch = () => {
    const { isTouch } = this.state;
    if (!isTouch.includes('confirmPassword')) {
      isTouch.push('confirmPassword');
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
      name, emailAddress, password, confirmPassword,
    } = this.state;

    schema.validate({
      name, emailAddress, password, confirmPassword,
    }, { abortEarly: false }).then(() => {
      this.setState({
        Errors: {},
        btnDisabled: false,
      });
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

  render() {
    const {
      password, confirmPassword, showPassword, showConfirmPassword, open, btnDisabled,
    } = this.state;
    return (
      <React.Fragment>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add Trainee
        </Button>
        <Dialog open={open} onClose={this.handleClose} fullWidth="true" aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your trainee details
            </DialogContentText>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  autoFocus
                  id="outlined-required"
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  onChange={this.handleNameChange}
                  onBlur={this.handleNameTouch}
                  error={!!this.getErrors('name')}
                  helperText={this.getErrors('name')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="outlined-required"
                  label="Email Address"
                  type="email"
                  margin="normal"
                  variant="outlined"
                  onChange={this.handleEmailChange}
                  onBlur={this.handleEmailTouch}
                  error={!!this.getErrors('emailAddress')}
                  helperText={this.getErrors('emailAddress')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="outlined-required"
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="outlined-required"
                  label="Confirm Password"
                  margin="normal"
                  variant="outlined"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={this.handleConfirmPasswordChange('confirmPassword')}
                  onBlur={this.handleConfirmPasswordTouch}
                  error={!!this.getErrors('confirmPassword')}
                  helperText={this.getErrors('confirmPassword')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton aria-label="Toggle password visibility" onClick={this.handleClickShowConfirmPassword}>
                          {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button color="primary" disabled={btnDisabled}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default AddDialog;
