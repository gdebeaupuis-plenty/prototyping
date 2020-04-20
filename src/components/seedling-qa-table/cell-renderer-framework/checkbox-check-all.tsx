import React from 'react';
import { Checkbox } from '@material-ui/core';
import { ICellRendererParams } from '@ag-grid-community/all-modules';

export const CheckboxCheckAll: React.FC<ICellRendererParams> = (props) => {
  const [checked, setChecked] = React.useState(false);

  if (!props.data.checkAllable) {
    return <span></span>;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);

  return <Checkbox color="primary" checked={checked} onChange={handleChange} />;
};
