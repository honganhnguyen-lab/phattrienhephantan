import { ThemeProvider } from '@mui/private-theming'
import React from 'react'
import DashboardContent from './Dashboard'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import EnhancedTable from './Score';

const ContainerScore = () => {
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
        <EnhancedTable/>
        </Container>
      </Box>
    </Box>
    </ThemeProvider>
    )
}

export default ContainerScore
