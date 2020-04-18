import React from 'react';
import { makeStyles, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export const SelectGapAndPlug: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState<string>('');

  const onChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  return (
    <Select className={classes.root} value={''} onChange={onChange}>
      <MenuItem value={''}>&nbsp;</MenuItem>
      <MenuItem value={'low'}>Low</MenuItem>
      <MenuItem value={'medium'}>Medium</MenuItem>
      <MenuItem value={'high'}>High</MenuItem>
    </Select>
  );
};
