import { ICellRendererParams } from '@ag-grid-community/all-modules';

export const useCheckAllHelpers = (props: ICellRendererParams) => {
  const isRowFullyChecked = props.columnApi
    .getAllColumns()
    .filter((column) => column.getColDef().cellRenderer === 'deferToCellRendererRowValue')
    .map((column) => column.getColDef().field)
    .every((field) => props.data[field] === true);

  const markRowAsChecked = (value: boolean) => {
    return props.columnApi
      .getAllColumns()
      .filter((column) => column.getColDef().cellRenderer === 'deferToCellRendererRowValue')
      .map((column) => column.getColDef().field)
      .reduce((checkAllData, field) => {
        checkAllData[field] = value;
        return checkAllData;
      }, {});
  };

  return {
    isRowFullyChecked,
    markRowAsChecked,
  };
};
