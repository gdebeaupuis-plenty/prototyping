import React from 'react';
import { Checkbox } from '@material-ui/core';

export const CheckboxCheckAll: React.FC = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <Checkbox color="primary" checked={checked} onChange={handleChange} />;
};
