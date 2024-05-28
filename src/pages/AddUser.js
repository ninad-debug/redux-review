import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';

const AddUser = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleAddUser = (data) => {

    // console.log('data', data)
    // const date = data?.dob
    // console.log('date', date.split('-').reverse().join('-'))

    const newUser = {
        id: Math.floor(Math.random() * 1000),
        ...data,
        // dob: date
    }
    dispatch(addUser(newUser))
    navigate('/')
  };

  return (
    <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
        <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '65ch' } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(handleAddUser)}
    >
      <h3>Welcome to add user page</h3>
      <div>
        <Controller
          name="fullName"
          control={control}
          defaultValue=""
          rules={{ required: 'Full Name is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Full Name"
              variant="outlined"
              error={!!errors.fullName}
              helperText={errors.fullName ? errors.fullName.message : ''}
            />
          )}
        />
      </div>
      <div>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address'
            }
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
            />
          )}
        />
      </div>
      <div>
        <Controller
          name="dob"
          control={control}
          defaultValue=""
          rules={{ required: 'Date of Birth is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Date of Birth"
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              error={!!errors.dob}
              helperText={errors.dob ? errors.dob.message : ''}
            />
          )}
        />
      </div>
      <div>
        <Controller
          name="summary"
          control={control}
          defaultValue=""
          rules={{ required: 'Summary is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Summary"
              variant="outlined"
              multiline
              rows={4}
              error={!!errors.summary}
              helperText={errors.summary ? errors.summary.message : ''}
            />
          )}
        />
      </div>
      <div style={{display:'flex', justifyContent:'space-between'}}>
         <Button variant="contained" color="secondary" type="submit" onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </Box>
    </div>
    
  );
};

export default AddUser;
