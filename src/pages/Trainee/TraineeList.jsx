/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import moment from 'moment';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { trainees } from './index';
import {
  AddDialog, EditTrainee, DeleteTrainee, TableDemo,
} from './Components';

class TraineeList extends React.Component {
  state = {
    order: 'asc',
    orderBy: '',
    page: 0,
    rowsPerPage: 10,
    openEdit: false,
    openDelete: false,
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

  handleEditDialogOpen = () => {
    this.setState({
      openEdit: true,
    });
  }

  handleEditDialogClose = () => {
    this.setState({
      openEdit: false,
    });
  }

  handleRemoveDialogOpen = () => {
    this.setState({
      openDelete: true,
    });
  }

  handleRemoveDialogClose = () => {
    this.setState({
      openDelete: false,
    });
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { match } = this.props;
    const {
      order, orderBy, page, rowsPerPage, openEdit, openDelete,
    } = this.state;
    return (
      <React.Fragment>
        <AddDialog />
        <EditTrainee open={openEdit} onEditClose={this.handleEditDialogClose} />
        <DeleteTrainee open={openDelete} onRemoveClose={this.handleRemoveDialogClose} />
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
              icon: <EditIcon />,
              handler: this.handleEditDialogOpen,
            },
            {
              icon: <DeleteIcon />,
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
