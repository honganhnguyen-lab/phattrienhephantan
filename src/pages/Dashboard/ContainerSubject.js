import { ThemeProvider } from '@mui/private-theming'
import React from 'react'
import DashboardContent from './Dashboard'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import InfoSub from './Subject/InfoSub';
import RegisSub from './Subject/RegisSub';
import FinalSub from './Subject/FinalSub';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ContainerSubject = () => {
    return (
        <ThemeProvider>
         <Box sx={{ display: 'flex' }}>
            <CssBaseline />
        <DashboardContent/>
        <Box
        component="main"
        sx={{
          backgroundcolor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
         <Grid item xs={6}>
            <Item>
              <InfoSub/>
            </Item>
        </Grid>
        <Grid item xs={6}>
            <Item>
              
            </Item>
        </Grid>
        <Grid item xs={12}>
            <Item>
              <FinalSub/>
            </Item>
        </Grid>
        </Grid>
      
        </Container>
      </Box>
    </Box>
    </ThemeProvider>
    )
}

export default ContainerSubject
