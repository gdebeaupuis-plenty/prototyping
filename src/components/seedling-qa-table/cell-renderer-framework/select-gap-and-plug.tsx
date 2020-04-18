import React from 'react';
import { makeStyles, Select, MenuItem } from '@material-ui/core';
import { ICellRendererParams } from '@ag-grid-community/all-modules';

const useStyles = makeStyles({
  root: {
    width: '100%',
    fontSize: '14px',
  },
});

export const SelectGapAndPlug: React.FC<ICellRendererParams> = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState<string>(props.value || '');

  // useEffect(() => props.setValue(value), [value]);

  const onChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  return (
    <Select className={classes.root} value={value || ''} onChange={onChange}>
      <MenuItem value={''}>&nbsp;</MenuItem>
      <MenuItem value={'low'}>Low</MenuItem>
      <MenuItem value={'medium'}>Medium</MenuItem>
      <MenuItem value={'high'}>High</MenuItem>
    </Select>
  );
};
