/* eslint-disable react/prop-types */
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

class AddDialog extends React.Component {
  state = {
    open: false,
    showPassword: false,
    showConfirmPassword: false,
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  }

  handleClickShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({
      showPassword: !showPassword,
    });
  }

  handleClickShowConfirmPassword = () => {
    const { showConfirmPassword } = this.state;
    this.setState({
      showConfirmPassword: !showConfirmPassword,
    });
  }

  render() {
    const {
      password, confirmPassword, showPassword, showConfirmPassword, open,
    } = this.state;
    const {
      onSubmit,
      nameChange,
      nameTouch,
      getError,
      emailChange,
      emailTouch,
      passwordChange,
      passwordTouch,
      confirmPasswordChange,
      confirmPasswordTouch,
      btnOnOff,
    } = this.props;
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
                  autoFocus
                  fullWidth
                  required
                  id="outlined-required"
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  onChange={nameChange}
                  onBlur={nameTouch}
                  error={!!getError('name')}
                  helperText={getError('name')}
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
                  fullWidth
                  required
                  id="outlined-required"
                  label="Email Address"
                  type="email"
                  margin="normal"
                  variant="outlined"
                  onChange={emailChange}
                  onBlur={emailTouch}
                  error={!!getError('emailAddress')}
                  helperText={getError('emailAddress')}
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
                  onChange={passwordChange('password')}
                  onBlur={passwordTouch}
                  error={!!getError('password')}
                  helperText={getError('password')}
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
                  onChange={confirmPasswordChange('confirmPassword')}
                  onBlur={confirmPasswordTouch}
                  error={!!getError('confirmPassword')}
                  helperText={getError('confirmPassword')}
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
            <Button color="primary" disabled={btnOnOff} onClick={onSubmit}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default AddDialog;
