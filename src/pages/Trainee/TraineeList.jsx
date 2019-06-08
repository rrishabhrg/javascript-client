/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { AddDialog } from './Components';
import { trainees } from './index';
import TableDemo from '../TableDemo/TableDemo';

class TraineeList extends React.Component {
  state = {
    order: 'asc',
    orderBy: '',
  }

  handleSort = (order, orderBy) => () => {
    if (order === 'asc') {
      this.setState({
        order: 'desc',
      });
    } else {
      this.setState({
        order: 'asc',
      });
    }
  }

  getDateFormatted = () => {
    return moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { match } = this.props;
    const { order, orderBy } = this.state;
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
            },
            {
              field: 'email',
              label: 'Email Address',
              format: value => value && value.toUpperCase(),
            },
            {
              field: 'createdAt',
              label: 'Date',
              align: 'right',
              format: this.getDateFormatted,
            },
          ]}
          orderBy={orderBy}
          order={order}
          onSort={this.handleSort}
          onSelect={this.handleSelect}
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
