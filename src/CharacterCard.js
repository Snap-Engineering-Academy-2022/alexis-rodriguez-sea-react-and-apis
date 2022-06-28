import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CharacterCard(props) {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 650 }}>
      <CardMedia
        component="img"
        height="350px"
        image={props.image}
        alt=""
      />
       <CardHeader
        title={props.name}
        titleTypographyProps={{ align: 'center' }}
        sx={{ mt: 1 }}
      />
      <CardContent sx={{height: 350}}>
        {
            props.descriptions.map((description,index) => 
                    <Typography key={index} gutterBottom variant="h6" component="li">
                        {description}
                    </Typography>
                )
        }
      </CardContent>

    </Card>
  )
}