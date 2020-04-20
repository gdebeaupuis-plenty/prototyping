import React from 'react';
import { makeStyles, Select, MenuItem } from '@material-ui/core';
import { ICellRendererParams } from '@ag-grid-community/all-modules';

const useStyles = makeStyles({
  inputRoot: {
    width: '100%',
    '&:before': {
      borderBottom: 0,
    },
    '&:focus:before, &:hover:before': {
      borderBottom: '0 !important',
    },
  },
  root: {
    fontSize: '14px',
    '&:focus': {
      background: 'transparent',
    },
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
    <Select className={classes.inputRoot} classes={{ root: classes.root }} value={value || ''} onChange={onChange}>
      <MenuItem value={''}>&nbsp;</MenuItem>
      <MenuItem value={'low'}>Low</MenuItem>
      <MenuItem value={'medium'}>Medium</MenuItem>
      <MenuItem value={'high'}>High</MenuItem>
    </Select>
  );
};
