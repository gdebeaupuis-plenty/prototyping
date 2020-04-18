import React from 'react';
import { Checkbox } from '@material-ui/core';
import { ICellRendererParams } from '@ag-grid-community/all-modules';

import { useCheckboxHelpers } from '../hooks/use-checkox-helpers';

const CHECK_ALL_COLUMN_FIELD_KEY = 'checkAll';

export const CheckboxMetric: React.FC<ICellRendererParams> = (props) => {
  const { getCheckAllableColumns, isColumnChecked } = useCheckboxHelpers(props);
  const [checked, setChecked] = React.useState(props.value || false);

  // update AgGrid state when internal state changes
  React.useEffect(() => {
    props.setValue(checked);

    // synch checkAll column
    const isAllColumnCheked = getCheckAllableColumns().every(isColumnChecked(props.data));
    props.node.setDataValue(CHECK_ALL_COLUMN_FIELD_KEY, isAllColumnCheked);
  }, [props, checked, getCheckAllableColumns, isColumnChecked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);

  return <Checkbox checked={checked} onChange={handleChange} />;
};
