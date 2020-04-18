import React from 'react';
import { ICellRendererParams, Column } from '@ag-grid-community/all-modules';

export const useCheckboxHelpers = (props: ICellRendererParams) => {
  /**
   * Returns whether a column can be modified by the Check All column.
   * @param column
   * @returns boolean
   */
  const isColumnCheckAllable = (column: Column): boolean =>
    column.getColDef().refData && column.getColDef().refData['checkAllable'] === 'true';

  /**
   * Returns whether a column is currently check.
   * @param data
   */
  const isColumnChecked = (data) => (column: Column): boolean => data[column.getColDef().field] === true;

  /**
   * Return all columns that can be modified by the Check All column.
   * @returns Column[]
   */
  const getCheckAllableColumns = React.useCallback(
    (): Column[] => props.columnApi.getAllColumns().filter(isColumnCheckAllable),
    [props]
  );

  return {
    isColumnCheckAllable,
    isColumnChecked,
    getCheckAllableColumns,
  };
};
