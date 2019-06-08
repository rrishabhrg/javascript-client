/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Table, TableRow, TableCell, TableBody, TableHead,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TableSortLabel from '@material-ui/core/TableSortLabel';

class TableDemo extends React.Component {
  render() {
    const {
      columns, data, order, orderBy, onSort,
    } = this.props;
    return (
      <Paper>
        <Table size="medium">
          <TableHead>
            <TableRow>
              {
                columns.map(row => (
                  <TableCell align="left">
                    <TableSortLabel direction={order} onClick={onSort(order, orderBy)}>
                      {row.label || row.name}
                    </TableSortLabel>
                  </TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data.map((row, index) => (
                <TableRow key={row.name} hover selected={index % 2 === 0 ? true : false}>
                  {
                    columns.map(value => (
                      <TableCell align="left">{(value.format) ? value.format(row[value.field]) : row[value.field]}</TableCell>
                    ))
                  }
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default TableDemo;
