import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useUserContext } from '../contexts/userContext';
import { useState, useEffect } from 'react';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Saturday', '15.9.23', 'Prakash', 'Fever', 'Take Augmentin'),
  createData('Monday', '23.9.23', 'Rahul', 'Cold', 'Cetrizine'),
  createData('Wednesday', '26.9.23', 'Ravi', 'Tonsil', 'Zedex'),
];

export default function CustomizedTables(Reports) {
  const {user} = useUserContext();

  const [reports, setReports] = useState([{}]);

  useEffect(()=>{
    async function getReports(userid){
      const result = await axios.post("http://localhost:8000/api/fetch/reports", {
        userid: userid
      });

      if(result.data[0]){
        setReports(result.data);
        console.log(result.data);
      }
    }

    getReports(user.userid);
    
  }, []);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Day</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Doctor&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Diagnosis&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Prescription&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
       <TableBody>
          {reports.map((report) => (
            <StyledTableRow key={report.R_ID}>
              <StyledTableCell component="th" scope="row">
                {report.P_ID} Idk what to put here
              </StyledTableCell>
              <StyledTableCell align="right">{report.date}</StyledTableCell>
              <StyledTableCell align="right">{report.D_ID}</StyledTableCell>
              <StyledTableCell align="right">{report.Diagnosis}</StyledTableCell>
              <StyledTableCell align="right">{report.Prescriptions}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
