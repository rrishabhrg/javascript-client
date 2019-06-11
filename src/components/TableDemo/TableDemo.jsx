/* eslint-disable no-console */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Table, TableRow, TableCell, TableBody, TableHead,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TablePagination from '@material-ui/core/TablePagination';

class TableDemo extends React.Component {
  render() {
    const {
      columns, data, actions, orderBy, order, onSort, count, page, rowsPerPage, handleChangePage,
    } = this.props;
    // console.log('TABLE_DATA---->>>>', data);
    // console.log('This.ID-->', id);
    return (
      <React.Fragment>
        <Paper>
          <Table size="medium">
            <TableHead>
              <TableRow>
                {
                  columns.map(row => (
                    <TableCell align="left">
                      <TableSortLabel direction={order} onClick={onSort(order, orderBy)}>
                        {row.label}
                      </TableSortLabel>
                    </TableCell>
                  ))
                }
                {
                  // eslint-disable-next-line no-unused-vars
                  actions.map(value => (
                    <TableCell />
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody style={{ cursor: 'pointer' }}>
              {
                data.map((row, index) => (
                  <TableRow key={row.name} hover selected={index % 2 === 0 ? true : false}>
                    {
                      columns.map(value => (
                        <TableCell align="left">{(value.format) ? value.format(row[value.field]) : row[value.field]}</TableCell>
                      ))
                    }
                    {
                      actions.map(value => (
                        <TableCell onClick={() => value.handler(row)}>{value.icon}</TableCell>
                      ))
                    }
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            labelRowsPerPage
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            rowsPerPageOptions={[]}
            onChangePage={handleChangePage}
          />
        </Paper>
      </React.Fragment>
    );
  }
}

export default TableDemo;
