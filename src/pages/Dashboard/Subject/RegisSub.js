import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,{ tableCellClasses }  from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';


export default function RegisSub() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
   <h2>HI</h2>
/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{height: 300}}>
         <Grid item xs={3}>
     <Box sx={{ height: 50, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial uncontrolled open example"
        sx={{ position: 'absolute', bottom: 0, right: 50}}
        icon={<SpeedDialIcon />}
        direction='down'
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
    </Grid>
    <Grid item xs={9}>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Tên môn</StyledTableCell>
            <StyledTableCell align="center">Thời gian học</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow
             
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">HI</TableCell>
              <TableCell align="center">HO</TableCell>

            </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
      </Grid>
      </Grid> */
   
   
  
  )
        }


