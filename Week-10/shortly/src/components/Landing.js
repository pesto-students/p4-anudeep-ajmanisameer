import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Shortly from './Shortly';

const Landing = () => {
  return (
    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', overflow: 'hidden' }} >
      <Container maxWidth="lg">
        <Grid container spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '80vh' }}>
          <Grid item xs={12} md={12}>
            <Shortly />
          </Grid>
        </Grid>
      </Container>

    </Box>

  );
}

export default Landing;