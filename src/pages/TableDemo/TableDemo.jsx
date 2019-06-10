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
import { UpdateIcon, RemoveIcon } from '../Trainee';

class TableDemo extends React.Component {
  // TablePaginationActions(props) {
  //   const classes = useStyles1();
  //   const theme = useTheme();
  //   const { count, page, rowsPerPage, onChangePage } = props;

  //   function handleBackButtonClick(event) {
  //     onChangePage(event, page - 1);
  //   }

  //   function handleNextButtonClick(event) {
  //     onChangePage(event, page + 1);
  //   }

  //   return (
  //     <div className={classes.root}>
  //       <IconButton
  //         onClick={handleBackButtonClick}
  //         disabled={page === 0}
  //         aria-label="Previous Page"
  //       >
  //         {theme.direction === "rtl" ? (
  //           <KeyboardArrowRight />
  //         ) : (
  //           <KeyboardArrowLeft />
  //         )}
  //       </IconButton>
  //       <IconButton
  //         onClick={handleNextButtonClick}
  //         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
  //         aria-label="Next Page"
  //       >
  //         {theme.direction === "rtl" ? (
  //           <KeyboardArrowLeft />
  //         ) : (
  //           <KeyboardArrowRight />
  //         )}
  //       </IconButton>
  //     </div>
  //   );
  // }

  // TablePaginationActions.propTypes = {
  //   count: PropTypes.number.isRequired,
  //   onChangePage: PropTypes.func.isRequired,
  //   page: PropTypes.number.isRequired,
  //   rowsPerPage: PropTypes.number.isRequired
  // };

  render() {
    const {
      columns, data, orderBy, order, onSort, count, page, rowsPerPage, handleChangePage,
    } = this.props;
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
                <TableCell />
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
                    <TableCell>
                      <UpdateIcon />
                      <RemoveIcon />
                    </TableCell>
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
