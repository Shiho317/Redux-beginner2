import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  primary : {
    background: 'gray',
    color: 'white',
    border: 'none',
    borderRadius: '3rem',
    padding: '10px',
    
  }
})

const PrimaryButton = (props) => {

  const classes = useStyles();

  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button className={classes.primary} variant="contained" onClick={() => {props.onClick()}}>
          {props.label}
        </Button> 
      </Stack>
    </div>
  )
}

export default PrimaryButton

