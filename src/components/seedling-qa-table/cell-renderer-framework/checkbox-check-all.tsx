import React from 'react';
import { Checkbox } from '@material-ui/core';
import { ICellRendererParams, Column } from '@ag-grid-community/all-modules';

/**
 * A column is checkable if its colDef has a refData['checkable'] === 'true
 * @param column
 * @returns boolean
 */
export const isColumnCheckAllable = (column: Column): boolean =>
  column.getColDef().refData && column.getColDef().refData['checkAllable'] === 'true';

/**
 *
 * @param data
 */
export const isColumnChecked = (data) => (column: Column): boolean => data[column.getColDef().field] === true;

export const CheckboxCheckAll: React.FC<ICellRendererParams> = (props) => {
  /**
   * Returns all the `columnDef.field` that can be impacted by Check All.
   * @param columnApi
   */
  const getCheckAllableColumns = (): Column[] => props.columnApi.getAllColumns().filter(isColumnCheckAllable);

  const initialValue = getCheckAllableColumns().every(isColumnChecked(props.data));
  const [checked, setChecked] = React.useState(initialValue || false);

  // update AgGrid state when internal state changes
  React.useEffect(() => {
    props.setValue(checked);

    // apply checkAll to other columns
    getCheckAllableColumns().forEach((column) => props.node.setDataValue(column.getColDef().field, checked));
  }, [props, checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <Checkbox color="primary" checked={checked} onChange={handleChange} />;
};
