/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Email from '@material-ui/icons/Email';

class UpdateIcon extends React.Component {
  state = {
    open: false,
  }

  handleEditDialogClickOpen = () => {
    const { open } = this.state;
    console.log('value of OPEN is: ', open);
    this.setState({
      open: true,
    });
  }

  handleEditDialogClickClose = () => {
    const { open } = this.state;
    console.log('value of CLOSE is: ', open);
    this.setState({
      open: false,
    });
  }

  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
        <Button onClick={this.handleEditDialogClickOpen}>
          <EditIcon />
        </Button>
        <Dialog open={open} onClose={this.handleEditDialogClickClose} fullWidth="true" aria-labelledby="form-dialog-title">
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
                id="email"
                name="name"
                label="Name"
                variant="outlined"
                margin="normal"
                autoComplete="name"
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
                id="email"
                name="email"
                label="Email Address"
                type="email"
                variant="outlined"
                margin="normal"
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
            <Button onClick={this.handleEditDialogClickClose} color="primary">Cancel</Button>
            <Button disabled variant="contained" color="primary">Submit</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default UpdateIcon;
