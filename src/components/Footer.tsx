import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
      <Container>
          <Box sx={{ bgcolor: '#06152c', height: '100px', width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
        <Typography variant="h6" gutterBottom>
               &copy; monster search app
        </Typography>
        </Box>
      </Container>
  )
}

export default Footer