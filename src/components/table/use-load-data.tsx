import React from 'react';
import { AgGridColumnProps } from '@ag-grid-community/react';
import * as faker from 'faker';
import { Checkbox }  from '@material-ui/core';

interface ColumnDef {
  headerName: string;
  field: string;
  width: number;
  cellRendererFramework?: AgGridColumnProps['cellRendererFramework'] | React.FC;
}

function CellCheckBoxRender() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  };

  return  <Checkbox checked={checked} onChange={handleChange} />
};

function CellCheckAllRender() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  };

  return  <Checkbox color="primary" checked={checked} onChange={handleChange} />
}

/**
 * Constants
 */

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']// 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];
const NUMBERS = [1]//, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Generate columnDefs
 * @param columnDefs
 */
function generateColumnsDefs(columnDefs: any[]) {
  LETTERS.forEach((letter) => {
    NUMBERS.forEach((number) => {
      columnDefs.push({
        headerName: `${letter.toUpperCase()}${number}`,
        field: `${letter.toUpperCase()}${number}`,
        width: 100,
        cellRendererFramework: CellCheckBoxRender
      })
    });
  });
}

/**
 * Generate row data
 * @param rowData
 * @param columnDefs
 */
function generateRowData(rowData: any[], columnDefs: any[]) {
  for (var i = 0; i < 10; i++) {
    const row: any = {
      name: faker.hacker.noun(),
    };

    columnDefs.slice(1).forEach((col: any) => {
      row[col.field] = false;
    });
    rowData.push(row);
  }
}

export const useLoadData = () => {
  const columnDefs: any[] = [];
  const rowData: any[] = [];

  columnDefs.push({
    headerName: 'Name',
    field: 'name',
    width: 300,
  });

  generateColumnsDefs(columnDefs);

  columnDefs.push({
    headrName: 'Check All',
    field: 'checkAll',
    width: 100,
    cellRendererFramework: CellCheckAllRender
  });

  generateRowData(rowData, columnDefs);

  return {
    columnDefs,
    rowData,
  };
}