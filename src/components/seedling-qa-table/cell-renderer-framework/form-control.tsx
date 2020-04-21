import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { ICellRendererParams } from '@ag-grid-community/all-modules';

const useStyles = makeStyles({
  root: {
    color: 'black',
  },
});
const errorUseStyles = makeStyles({
  root: {
    color: 'red',
  },
});

export const FormControl: React.FC<ICellRendererParams> = (props) => {
  const defaultClasses = useStyles();
  const errorClasses = errorUseStyles();

  // @todo cleanup this and improve re-usability
  let classes = defaultClasses;
  if (Array.isArray(props.data.errors) && props.data.errors.length > 0) {
    console.log('omg');
    classes = errorClasses;
  }

  return (
    <Typography classes={classes} color="textPrimary">
      {props.value}
    </Typography>
  );
};
