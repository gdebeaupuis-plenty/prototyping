import React from 'react';
import { Checkbox } from '@material-ui/core';
import { ICellRendererParams } from '@ag-grid-community/all-modules';

export const CheckboxMetric: React.FC<ICellRendererParams> = (props) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);

  return <Checkbox checked={checked} onChange={handleChange} />;
};
