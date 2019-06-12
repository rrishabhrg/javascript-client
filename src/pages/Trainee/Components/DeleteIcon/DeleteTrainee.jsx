/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
import React from 'react';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

class DeleteTrainee extends React.Component {
  render() {
    const { open, onRemoveClose, RemoveClose } = this.props;
    return (
      <React.Fragment>
        <Dialog open={open} onClose={RemoveClose} fullWidth="true" aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Remove Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you really want to remove the trainee ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={RemoveClose} color="primary">Cancel</Button>
            <Button onClick={onRemoveClose} variant="contained" color="primary">Delete</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default DeleteTrainee;
