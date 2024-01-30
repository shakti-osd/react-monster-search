import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme();
theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};


const Header = () => {
  return (
    <Container>
      <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: '#06152c', height: '100px', width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
        <Typography variant="h3" gutterBottom>
               Monster Search App
        </Typography>
        </Box>
        </ThemeProvider>
      </Container>
  )
}

export default Header