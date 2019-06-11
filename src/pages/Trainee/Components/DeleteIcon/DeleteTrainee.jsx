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
import trainees from '../../Data/trainees';

class DeleteTrainee extends React.Component {
  state = {
    // DeletedItem: '',
  }

  handleDeleteClick = () => {
    this.setState({
      DeletedItem: { trainees },
    });
  }

  render() {
    const { open, onRemoveClose } = this.props;
    const { DeletedItem } = this.state;
    console.log('Deleted Item--->>>', DeletedItem);
    // console.log('DELETE_OPEN-->>', open);
    // console.log('DELETE_CLOSE-->>', onRemoveClose);
    // console.log('DELETE_DATA-->>', this.props.data);
    return (
      <React.Fragment>
        <Dialog open={open} onClose={onRemoveClose} fullWidth="true" aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Remove Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you really want to remove the trainee ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onRemoveClose} color="primary">Cancel</Button>
            <Button variant="contained" color="primary" onClick={this.handleDeleteClick}>Delete</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default DeleteTrainee;
