/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
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
import {
  AddDialog, EditTrainee, DeleteTrainee, schema,
} from './Components';
import { SnackbarHOC } from '../../Contexts';

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
    name: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
    Errors: {},
    isTouch: [],
    btnDisabled: true,
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    }, this.validator);
  }

  handleEmailChange = (event) => {
    this.setState({
      emailAddress: event.target.value,
    }, this.validator);
  }

  handlePasswordChange = () => (event) => {
    this.setState({
      password: event.target.value,
    }, this.validator);
  }

  handleConfirmPasswordChange = () => (event) => {
    this.setState({
      confirmPassword: event.target.value,
    }, this.validator);
  }

  handleNameTouch = () => {
    const { isTouch } = this.state;
    if (!isTouch.includes('name')) {
      isTouch.push('name');
    }
    this.setState({
      isTouch,
    }, this.validator);
  }

  handleEmailTouch = () => {
    const { isTouch } = this.state;
    if (!isTouch.includes('emailAddress')) {
      isTouch.push('emailAddress');
    }
    this.setState({
      isTouch,
    }, this.validator);
  }

  handlePasswordTouch = () => {
    const { isTouch } = this.state;
    if (!isTouch.includes('password')) {
      isTouch.push('password');
    }
    this.setState({
      isTouch,
    }, this.validator);
  }

  handlePasswordChangeTouch = () => {
    const { isTouch } = this.state;
    if (!isTouch.includes('confirmPassword')) {
      isTouch.push('confirmPassword');
    }
    this.setState({
      isTouch,
    }, this.validator);
  }

  hasErrors = (value) => {
    const { Errors } = this.state;
    return Errors[value] ? Errors[value] : '';
  }

  isTouch = (value) => {
    const { isTouch } = this.state;
    return isTouch.includes(value);
  }

  getErrors = (value) => {
    const { Errors } = this.state;
    if (this.isTouch(value) && this.hasErrors(value)) {
      return Errors[value];
    }
    return '';
  }

  validator = () => {
    const {
      name, emailAddress, password, confirmPassword,
    } = this.state;
    schema.validate({
      name, emailAddress, password, confirmPassword,
    }, { abortEarly: false }).then(() => {
      this.setState({
        Errors: {},
        btnDisabled: false,
      });
    }).catch((errors) => {
      const error = {};
      errors.inner.map((err) => {
        error[err.path] = err.message;
      });
      this.setState({
        Errors: error,
        btnDisabled: true,
      });
    });
  }

  handleOnSubmit = () => {
    const { name, emailAddress, password } = this.state;
    const { value } = this.props;
    console.log({ name, emailAddress, password });
    console.log(this.props);
    value.onOpenSnackbar('Trainee Added Successfully', 'Well Done !!!! ');
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
    const { value } = this.props;
    console.log('Edited Item', selectedRowEdit);
    value.onOpenSnackbar('Edited Successfully', 'Well Done !!!!');
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
    const { value } = this.props;
    console.log('Deleted Item', selectedRowDelete);
    value.onOpenSnackbar('Deleted Successfully', 'Well Done !!!! ');
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
    const { match } = this.props;
    const {
      order, orderBy, page, rowsPerPage, openEdit, openDelete, btnDisabled, Errors,
    } = this.state;
    return (
      <React.Fragment>
        <AddDialog
          nameChange={this.handleNameChange}
          emailChange={this.handleEmailChange}
          passwordChange={this.handlePasswordChange}
          confirmPasswordChange={this.handleConfirmPasswordChange}
          nameTouch={this.handleNameTouch}
          emailTouch={this.handleEmailTouch}
          passwordTouch={this.handlePasswordTouch}
          confirmPasswordTouch={this.handlePasswordChangeTouch}
          hasError={this.hasErrors}
          Touch={this.isTouch}
          getError={this.getErrors}
          valid={this.validator}
          onSubmit={this.handleOnSubmit}
          btnOnOff={btnDisabled}
          readError={Errors}
        />
        <EditTrainee
          open={openEdit}
          onEditClose={this.handleEditDialogClose}
          EditClose={this.EditDialogClose}
        />
        <DeleteTrainee
          open={openDelete}
          onRemoveClose={this.handleRemoveDialogClose}
          RemoveClose={this.RemoveDialogClose}
        />
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

export default SnackbarHOC(TraineeList);
