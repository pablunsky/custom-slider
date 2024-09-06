import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import CustomSlider from './Components/CustomSlider';


export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 10 }}>
        <CustomSlider min={-5} max={5} />
      </Box>
    </Container>
  );
}
