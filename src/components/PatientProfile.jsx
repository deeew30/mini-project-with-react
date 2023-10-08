import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PatientProfile() {
  return (
    <Card sx={{ maxWidth: 700 }}>
      <CardMedia
        alt="green iguana"
        height="200"
        style={{ border: "2px solid black" }}
        
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Patient Profile
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p> Name:'Rahul'</p>
        <p> Age:'30'</p>
        <p> Gender:'male'</p>
        <p> Bloodgroup:'A+'</p>
        <p> Email:'rahulyadav@gmail.com'</p>
        <p> Contact No:'123-456-7890'</p>
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
