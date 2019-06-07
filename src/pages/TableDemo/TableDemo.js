/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { trainees } from '../Trainee';

// class TableDemo extends React.Component {
//   render() {
//     return (
//       <Paper>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Dessert (100g serving)</TableCell>
//               <TableCell align="right">Calories</TableCell>
//               <TableCell align="right">Fat&nbsp;(g)</TableCell>
//               <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//               <TableCell align="right">Protein&nbsp;(g)</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             <TableRow>
//               <TableCell>Frozen yoghurt</TableCell>
//               <TableCell align="right">159</TableCell>
//               <TableCell align="right">6</TableCell>
//               <TableCell align="right">24</TableCell>
//               <TableCell align="right">4</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>Ice cream sandwich</TableCell>
//               <TableCell align="right">237</TableCell>
//               <TableCell align="right">9</TableCell>
//               <TableCell align="right">37</TableCell>
//               <TableCell align="right">4.3</TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </Paper>
//     );
//   }
// }

class TableDemo extends React.Component {
  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              {
                trainees.map(item => (
                  <TableCell>{item.name}</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {
                trainees.map(item => (
                  <>
                    <TableCell>{item.name}</TableCell>
                  </>
                ))
              }
            </TableRow>
            <TableRow>
              {
                trainees.map(item => (
                  <TableCell>{item.email}</TableCell>
                ))
              }
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default TableDemo;

{/* <Table
  id="id"
  data={traineeData}
  columns={[
    {
      field: 'name',
      label: 'Name',
      align: 'center',
    },
    {
      field: 'email',
      label: 'Email Address',
    },
  ]}
/> */}
