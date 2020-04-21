import React from 'react';
import { Checkbox } from '@material-ui/core';
import { ICellRendererParams } from '@ag-grid-community/all-modules';

import { useCheckAllHelpers } from '../hooks/use-check-all-helpers';

const CheckAll: React.FC<ICellRendererParams> = (props) => {
  const { isRowFullyChecked, markRowAsChecked } = useCheckAllHelpers(props);
  props.setValue(isRowFullyChecked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.node.setData({ ...props.data, ...markRowAsChecked(event.target.checked) });
    props.setValue(event.target.checked);
  };

  return <Checkbox color="primary" checked={props.value} onChange={handleChange} />;
};

export const CheckboxCheckAll: React.FC<ICellRendererParams> = (props) => {
  if (!props.data.checkAllable) {
    return <span></span>;
  }

  return <CheckAll {...props} />;
};
