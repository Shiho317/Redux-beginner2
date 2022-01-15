import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const TextInput = (props) => {
  return (
    <div>
      <Box
        component="form"
        sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
        <TextField 
          id="standard-basic"
          label={props.label}
          variant="standard"
          required={props.required}
          value={props.value}
          type={props.type}
          onChange={props.onChange}/>
      </Box>
    </div>
  )
}
