/* eslint-disable no-console */
import React from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

class RemoveIcon extends React.Component {
  state = {
    open: false,
  }

  handleDeleteDialogClickOpen = () => {
    const { open } = this.state;
    console.log('value of OPEN is: ', open);
    this.setState({
      open: true,
    });
  }

  handleDeleteDialogClickClose = () => {
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
        <Button onClick={this.handleDeleteDialogClickOpen}>
          <DeleteIcon />
        </Button>
        <Dialog open={open} onClose={this.handleDeleteDialogClickClose} fullWidth="true" aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Remove Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you really want to remove the trainee ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDeleteDialogClickClose} color="primary">Cancel</Button>
            <Button variant="contained" color="primary">Delete</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default RemoveIcon;
