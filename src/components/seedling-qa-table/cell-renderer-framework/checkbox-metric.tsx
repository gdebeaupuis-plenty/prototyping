import React from 'react';
import { Checkbox } from '@material-ui/core';
import { ICellRendererParams, Column } from '@ag-grid-community/all-modules';

import { isColumnCheckAllable, isColumnChecked } from './checkbox-check-all';

const CHECK_ALL_COLUMN_FIELD_KEY = 'checkAll';

export const CheckboxMetric: React.FC<ICellRendererParams> = (props) => {
  /**
   * Returns all the `columnDef.field` that can be impacted by Check All.
   * @param columnApi
   */
  const getCheckAllableColumns = (): Column[] => props.columnApi.getAllColumns().filter(isColumnCheckAllable);

  const [checked, setChecked] = React.useState(props.value || false);

  // update AgGrid state when internal state changes
  React.useEffect(() => {
    props.setValue(checked);

    // synch checkAll column
    const isAllColumnCheked = getCheckAllableColumns().every(isColumnChecked(props.data));
    console.log(isAllColumnCheked);
    props.node.setDataValue(CHECK_ALL_COLUMN_FIELD_KEY, isAllColumnCheked);
  }, [props, checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <Checkbox checked={checked} onChange={handleChange} />;
};
