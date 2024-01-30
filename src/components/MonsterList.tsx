import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props{
    monsterData: any
}

const MonsterList:React.FC<Props> = ({monsterData}) => {
    const mosterCardUI = monsterData.map((item:any, index:number) => {
        return (
            <Box sx={{ marginBottom: '20px' }} key={index}>
                <Card sx={{ width: { xs:'322px'}}}>
                <CardMedia
                    sx={{ height: '140px' }}
                    image="/images/contemplative-reptile.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item?.name}
                    </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">{ item?.phone}</Button>
                <Button size="small">{ item?.company?.name}</Button>
                </CardActions>
            </Card>
            </Box>
        )
    })
  return (
      <Container sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', padding: '20px'}}>
          {
              monsterData.length > 0 ? mosterCardUI : 'No Record Found'
          }
      </Container>
  )
}

export default MonsterList