import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CharacterCard(props) {
  return (
    <Card sx={{ maxWidth: 345, minHeight: 600 }}>
      <CardMedia
        component="img"
        height="100%"
        image={props.image}
        alt=""
      />
      <CardContent>
        {
            props.descriptions.map((description) => {
                return(
                    <Typography gutterBottom variant="h6" component="div">
                        - {description}
                    </Typography>
                )
            })
        }
      </CardContent>
    </Card>
  );
}