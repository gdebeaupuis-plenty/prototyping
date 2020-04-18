import React from 'react';
import { Checkbox } from '@material-ui/core';

export const CheckboxMetric: React.FC = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <Checkbox checked={checked} onChange={handleChange} />;
};
