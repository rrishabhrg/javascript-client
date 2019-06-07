/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Table, TableRow, TableCell, TableBody, TableHead,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { trainees } from '../Trainee';

class TableDemo extends React.Component {
  render() {
    const { columns } = this.props;
    return (
      <React.Fragment>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                {
                  columns.map(row => (
                    <TableCell>{ row.label }</TableCell>
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {
                trainees.map(row => (
                  <TableRow key={row.name}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </Paper>
      </React.Fragment>
    );
  }
}

export default TableDemo;
