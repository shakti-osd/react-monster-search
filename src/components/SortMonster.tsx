import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SortMonster = ({changeOrder, selectedOrder}) => {


    
    return (
      <>
          <Box sx={{ minHeight: '50px', padding:'10px 20px 0' }} >
            <Typography variant="h5" gutterBottom>
                Monster Sort
            </Typography>
            <Box sx={{ minWidth: 120, marginBottom: '1.5rem' }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Order</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedOrder}
                    label="Order"
                    onChange={changeOrder}
                    >
                    <MenuItem value='asc'>Asending</MenuItem>
                    <MenuItem value='des'>Desceding</MenuItem>
                    </Select>
                </FormControl>
            </Box>
          </Box>
        
            </>
  )
}

export default SortMonster