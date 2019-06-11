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
import { TableDemo } from '../../components/TableDemo';
import { AddDialog, EditTrainee, DeleteTrainee } from './Components';

class TraineeList extends React.Component {
  state = {
    order: 'asc',
    orderBy: '',
    page: 0,
    rowsPerPage: 10,
    openEdit: false,
    openDelete: false,
    selectedRowDelete: {},
    selectedRowEdit: {},
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

  handleEditDialogOpen = (row) => {
    this.setState({
      openEdit: true,
      selectedRowEdit: row,
    });
  }

  handleEditDialogClose = () => {
    this.setState({
      openEdit: false,
    });
    const { selectedRowEdit } = this.state;
    console.log('Edited Item', selectedRowEdit);
  }

  EditDialogClose = () => {
    this.setState({
      openEdit: false,
    });
  }

  handleRemoveDialogOpen = (row) => {
    this.setState({
      openDelete: true,
      selectedRowDelete: row,
    });
  }

  handleRemoveDialogClose = () => {
    this.setState({
      openDelete: false,
    });
    const { selectedRowDelete } = this.state;
    console.log('Deleted Item', selectedRowDelete);
  }

  RemoveDialogClose = () => {
    this.setState({
      openDelete: false,
    });
  }

  getDateFormatted = () => {
    return moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
  }

  handleChangePage = (page, rowsPerPage) => {
    if (page <= rowsPerPage) {
      this.setState({
        page: page + rowsPerPage,
        rowsPerPage: rowsPerPage + rowsPerPage,
      });
    }
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { match } = this.props;
    const {
      order, orderBy, page, rowsPerPage, openEdit, openDelete, Errors,
    } = this.state;
    return (
      <React.Fragment>
        <AddDialog />
        <EditTrainee open={openEdit} onEditClose={this.handleEditDialogClose} EditClose={this.EditDialogClose} Errors={Errors} />
        <DeleteTrainee open={openDelete} onRemoveClose={this.handleRemoveDialogClose} RemoveClose={this.RemoveDialogClose} />
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
