import React from 'react';
import { TextField } from '@material-ui/core';

export const TextFieldMetric: React.FC = () => {
  const [value, setValue] = React.useState<string>('');

  const onChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  return <TextField value={value} onChange={onChange} />;
};
