
import { useState, useContext } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import  ShortlyContext  from '../_store/shortly-context';

const ShortlyTable = (props) => {
  const shortlyCtx = useContext(ShortlyContext)

  return (<>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Entered Link</TableCell>
            <TableCell align="right">Generated Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shortlyCtx.catchedLists.map((el) => (
            <TableRow
              key={el.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {el.link}
              </TableCell>
              <TableCell align="right"><Link href={el.link}> {el.short_link}</Link> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>);
}

export default ShortlyTable;