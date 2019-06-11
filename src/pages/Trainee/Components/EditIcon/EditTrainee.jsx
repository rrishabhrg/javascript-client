/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-parens */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Email from '@material-ui/icons/Email';
import schema from './Schema';

class EditTrainee extends React.Component {
  state = {
    name: '',
    emailAddress: '',
    Errors: {},
    isTouch: [],
    btnDisabled: true,
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
      name, emailAddress,
    } = this.state;
    schema.validate({
      name, emailAddress,
    }, { abortEarly: false }).then(() => {
      this.setState({
        Errors: {},
        btnDisabled: false,
      });
    }).catch((errors) => {
      const error = {};
      errors.inner.map(err => {
        error[err.path] = err.message;
      });
      this.setState({
        Errors: error,
        btnDisabled: true,
      });
    });
  }

  render() {
    const { open, onEditClose } = this.props;
    // console.log('DATA-->>', this.props.data);
    // console.log('OPEN-->>', open);
    // console.log('ONEDITCLOSE-->>', onEditClose);
    const { btnDisabled } = this.state;
    return (
      <React.Fragment>
        <Dialog open={open} onClose={onEditClose} fullWidth="true" aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Edit Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your trainee details
            </DialogContentText>
            <form>
              <TextField
                autoFocus
                fullWidth
                required
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
              <TextField
                fullWidth
                required
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
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={onEditClose} color="primary">Cancel</Button>
            <Button variant="contained" color="primary" disabled={btnDisabled}>Submit</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default EditTrainee;
