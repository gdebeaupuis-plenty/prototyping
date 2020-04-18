import React from 'react';
import { TextField } from '@material-ui/core';
import { ICellRendererParams } from '@ag-grid-community/all-modules';

export const TextFieldMetric: React.FC<ICellRendererParams> = (props) => {
  const [value, setValue] = React.useState<string>(props.value || '');

  const onChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  return <TextField value={value} onChange={onChange} />;
};
