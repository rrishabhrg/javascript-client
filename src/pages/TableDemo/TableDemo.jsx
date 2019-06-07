/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Table, TableRow, TableCell, TableBody, TableHead,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

class TableDemo extends React.Component {
  render() {
    const { columns, data } = this.props;
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
                data.map(row => (
                  <TableRow key={row.name}>
                    {
                      columns.map(index => (
                        <TableCell>{row[index.field]}</TableCell>
                      ))
                    }
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
