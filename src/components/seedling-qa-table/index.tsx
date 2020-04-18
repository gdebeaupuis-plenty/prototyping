import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { AgGridReact } from '@ag-grid-community/react';
import { AllCommunityModules, GridReadyEvent, GridApi } from '@ag-grid-community/all-modules';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

import {
  CheckboxMetric,
  CheckboxCheckAll,
  DeferToMetric,
  TextFieldMetric,
  SelectGapAndPlug,
} from './cell-renderer-framework';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '.ag-theme-balham': {
      '& .ag-cell': {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      '& .ag-react-container': {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      '& .ag-cell:first-child': {
        justifyContent: 'flex-start',
      },
      '& .ag-row.ag-row-last': {
        borderBottom: 0,
      },
    },
  },
  typography: {
    color: theme.palette.grey[500],
  },
}));

const columnDefs = [
  { headerName: 'Quality Metric', field: 'metricName', width: 220 },
  { headerName: 'C3', field: 'C3', cellRendererFramework: DeferToMetric, width: 100 },
  { headerName: 'E3', field: 'E3', cellRendererFramework: DeferToMetric, width: 100 },
  { headerName: 'G3', field: 'G3', cellRendererFramework: DeferToMetric, width: 100 },
  { headerName: 'C12', field: 'C12', cellRendererFramework: DeferToMetric, width: 100 },
  { headerName: 'E12', field: 'E12', cellRendererFramework: DeferToMetric, width: 100 },
  { headerName: 'G12', field: 'G12', cellRendererFramework: DeferToMetric, width: 100 },
  { headerName: 'C14', field: 'C14', cellRendererFramework: DeferToMetric, width: 100 },
  { headerName: 'E14', field: 'E14', cellRendererFramework: DeferToMetric, width: 100 },
  { headerName: 'G14', field: 'G14', cellRendererFramework: DeferToMetric, width: 100 },
  { headerName: 'C21', field: 'C21', cellRendererFramework: DeferToMetric, width: 100 },
  { headerName: 'E21', field: 'E21', cellRendererFramework: DeferToMetric, width: 100 },
  { headerName: 'G21', field: 'G21', cellRendererFramework: DeferToMetric, width: 100 },
  { headerName: 'Check All', field: 'checkAll', cellRendererFramework: CheckboxCheckAll, width: 100 },
];

const rowData = [
  { metricName: 'Seedling Count*', cellRendererFramework: TextFieldMetric },
  { metricName: 'Gap & Plug', cellRendererFramework: SelectGapAndPlug },
  { metricName: 'Underdeveloped Shoot', cellRendererFramework: CheckboxMetric },
  { metricName: 'Overdeveloped Shoot', cellRendererFramework: CheckboxMetric },
  { metricName: 'Leggy', cellRendererFramework: CheckboxMetric },
  { metricName: 'Root Discoloration', cellRendererFramework: CheckboxMetric },
  { metricName: 'Leaf Discoloration', cellRendererFramework: CheckboxMetric },
  { metricName: 'Dry Plug', cellRendererFramework: CheckboxMetric },
  { metricName: 'Oversaturated Plug', cellRendererFramework: CheckboxMetric },
  { metricName: 'Mold', cellRendererFramework: CheckboxMetric },
  { metricName: 'Incorrect SKU', cellRendererFramework: CheckboxMetric },
  { metricName: 'Injurious Foreign Material', cellRendererFramework: CheckboxMetric },
];

const calculateWidth = (columnDefs) =>
  columnDefs.map((header) => header.width).reduce((sum: number, i: number) => sum + i, 0) + 2;

export function SeedlingQaTable() {
  useStyles();
  // const { columnDefs, rowData } = useLoadData();

  const width = calculateWidth(columnDefs);

  const [gridApi, setGridApi] = React.useState<GridApi>();
  const onGridReady = (event: GridReadyEvent) => setGridApi(event.api);

  if (gridApi) {
    // gridApi.
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <div className="ag-theme-balham" style={{ width: width, height: '80vh' }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          rowHeight={50}
          domLayout={'autoHeight'}
          modules={AllCommunityModules}
          onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </Box>
  );
}
