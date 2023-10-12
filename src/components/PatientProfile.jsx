import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
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
        <p> Name:'{user.name}'</p>
        <p> Age:'30'not via database yet</p>
        <p> Gender:'male'not via database yet</p>
        <p> Bloodgroup:'{user.BG}'</p>
        <p> Email:'{user.email}'</p>
        <p> Contact No:'123-456-7890' not via db yet</p>
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
