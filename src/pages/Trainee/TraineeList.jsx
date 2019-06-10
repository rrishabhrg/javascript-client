/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import moment from 'moment';
import { AddDialog, UpdateIcon, RemoveIcon } from './Components';
import { trainees } from './index';
import { TableDemo } from '../../components';

class TraineeList extends React.Component {
  state = {
    order: 'asc',
    orderBy: '',
    page: 0,
    rowsPerPage: 10,
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

  handleChangePage = (page, rowsPerPage) => {
    if (page <= rowsPerPage) {
      this.setState({
        page: page + rowsPerPage,
        rowsPerPage: rowsPerPage + rowsPerPage,
      });
    }
  }

  getDateFormatted = () => {
    return moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { match } = this.props;
    const {
      order, orderBy, page, rowsPerPage,
    } = this.state;
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
          actions={[
            {
              icon: <UpdateIcon />,
              handler: this.handleEditDialogOpen,
            },
            {
              icon: <RemoveIcon />,
              handler: this.handleRemoveDialogOpen,
            },
          ]}
          orderBy={orderBy}
          order={order}
          onSort={this.handleSort}
          onSelect={this.handleSelect}
          count={100}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={this.handleChangePage}
        />
      </React.Fragment>
    );
  }
}

export default TraineeList;
