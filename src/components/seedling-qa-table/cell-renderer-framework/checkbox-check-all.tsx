import React from 'react';
import { Checkbox } from '@material-ui/core';
import { ICellRendererParams } from '@ag-grid-community/all-modules';

import { useCheckboxHelpers } from '../hooks/use-checkox-helpers';

export const CheckboxCheckAll: React.FC<ICellRendererParams> = (props) => {
  const { isColumnChecked, getCheckAllableColumns } = useCheckboxHelpers(props);
  const initialValue = getCheckAllableColumns().every(isColumnChecked(props.data));
  const [checked, setChecked] = React.useState(initialValue || false);

  // update AgGrid state when internal state changes
  React.useEffect(() => {
    props.setValue(checked);

    // apply checkAll to other columns
    getCheckAllableColumns().forEach((column) => props.node.setDataValue(column.getColDef().field, checked));
  }, [props, checked, getCheckAllableColumns]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);

  return <Checkbox color="primary" checked={checked} onChange={handleChange} />;
};
