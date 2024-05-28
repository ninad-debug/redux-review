import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { deleteUser } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

export default function UserCard({userId, user}) {

  const dispatch = useDispatch()

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id))
  }

  console.log('user', user)
  return (
    <Card sx={{ width: 265 }} key={userId}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {user?.fullName}
        </Typography>
        <Typography variant="h5" component="div">
        {user?.email}
        </Typography>  
        <br />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          D.O.B - {user?.dob}
        </Typography>
        <Typography variant="body2">
          {user?.summary}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Update</Button>
      </CardActions>
        <Button size="small" onClick={() => handleDeleteUser(userId)}>Delete</Button>
    </Card>
  );
}
