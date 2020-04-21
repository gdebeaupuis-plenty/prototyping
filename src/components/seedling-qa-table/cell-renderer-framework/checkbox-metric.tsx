import React, { useEffect } from 'react';
import { Checkbox } from '@material-ui/core';
import { ICellRendererParams } from '@ag-grid-community/all-modules';

import { useCheckAllHelpers } from '../hooks/use-check-all-helpers';

export const CheckboxMetric: React.FC<ICellRendererParams> = (props) => {
  const { isRowFullyChecked } = useCheckAllHelpers(props);

  useEffect(() => props.node.setDataValue('checkAll', isRowFullyChecked), [isRowFullyChecked, props]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setValue(event.target.checked);
  };

  return <Checkbox checked={props.value} onChange={handleChange} />;
};
