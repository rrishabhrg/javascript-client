/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TraineeList from './TraineeList';
import TraineeDetail from './TraineeDetail';

class Trainee extends React.Component {
  render() {
    const { match } = this.props;
    // console.log('trainee', this.props);
    return (
      <Switch>
        <Route exact path={match.url} component={TraineeList} />
        <Route exact path={`${match.url}/:id`} component={TraineeDetail} />
      </Switch>
    );
  }
}

export default Trainee;
