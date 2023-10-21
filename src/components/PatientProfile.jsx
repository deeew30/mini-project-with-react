import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useUserContext } from '../contexts/userContext';

export default function PatientProfile() {

  const {user} = useUserContext();

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
        <p> Name: {user.name}</p>
        <p> DOB: {user.DOB.toString().slice(0,10)}</p>
        <p> Gender: {user.gender}</p>
        <p> Bloodgroup: {user.BG}</p>
        <p> Email: {user.email}</p>
        <p> Contact No: {user.contact}</p>
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
