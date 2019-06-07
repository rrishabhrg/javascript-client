/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';
import { trainees } from './index';

class TraineeDetail extends React.Component {
  displayTraineeDetails = () => {
    const { match } = this.props;
    return trainees.filter(item => item.id === match.params.id);
  }

  getDateFormatted = () => {
    return moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
  }

  render() {
    const { match } = this.props;
    console.log('traineeDetails', this.props);
    console.log('id', match);
    const item = this.displayTraineeDetails();
    const date = this.getDateFormatted();
    return (
      <div>
        <Paper style={{ marginTop: '2rem' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={2}>
              <Avatar alt="Profile Picture" src="/images/pp.jpg" style={{ width: '8rem', height: '8rem' }} />
            </Grid>
            <Grid item xs={12} sm={10}>
              <Grid container xs={12}>
                <Paper style={{ width: '100%', marginRight: '1rem', paddingLeft: '1rem', height: '8rem' }}>
                  <Typography variant="h3">{item[0].name}</Typography>
                  <Typography variant="h5">{date}</Typography>
                  <Typography variant="h6">{item[0].email}</Typography>
                  <Typography variant="h6">{item[0].role}</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Button variant="contained" style={{ marginTop: '2rem', marginLeft: '35rem' }}>Back</Button>
      </div>
    );
  }
}

export default TraineeDetail;
