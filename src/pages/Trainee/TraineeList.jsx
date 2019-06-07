/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import { AddDialog } from './Components';
import TableDemo from '../TableDemo/TableDemo';
import { trainees } from './index';

class TraineeList extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { match } = this.props;
    console.log('traineeList', this.props);
    return (
      <React.Fragment>
        <AddDialog />
        <TableDemo
          id="id"
          data={trainees}
          columns={[
            {
              field: 'name',
              label: 'Name',
              align: 'center',
            },
            {
              field: 'email',
              label: 'Email Address',
            },
          ]}
        />
        <ul>
          {
            trainees.map(item => (
              <li>
                <Link to={`${match.url}/${item.id}`} style={{ color: 'blue', textDecoration: 'none' }}>{item.name}</Link>
              </li>
            ))
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default TraineeList;
