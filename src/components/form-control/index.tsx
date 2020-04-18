import React from 'react';
import { FormControl as MuiFormControl, FormControlProps as MuiFormControlProps, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  formControl: {
    width: '100%',
  },
});

export const FormControl: React.FC<MuiFormControlProps> = ({ children, ...props}) => {
  const classes = useStyles({});

  return (
    <MuiFormControl className={classes.formControl} {...props}>{children}</MuiFormControl>
  )
}