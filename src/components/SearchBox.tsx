import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

interface Props{
    changeHandler: () => void;
}

const SearchBox:React.FC<Props> = ({changeHandler}) => {
   
    
  return (
      <>
          <Box sx={{ minHeight: '50px', padding:'10px 20px 0' }} >
            <Typography variant="h5" gutterBottom>
                Monster Search
            </Typography>
            <TextField sx={{ marginBottom: '1.5rem'}} id="outlined-basic" label="Search" variant="outlined" onChange={changeHandler} />
          </Box>
      </>
  )
}

export default SearchBox