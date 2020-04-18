import React from 'react';
import { Box, Button, useTheme } from '@material-ui/core';
import { AgGridReact } from '@ag-grid-community/react';
import { AllCommunityModules, GridReadyEvent, GridApi } from '@ag-grid-community/all-modules';

import { columnDefs, rowData } from './configuration';
import { useStyles } from './styles';

import { SeedlingQaRow } from './types';

const calculateWidth = (columnDefs) =>
  columnDefs.map((header) => header.width).reduce((sum: number, i: number) => sum + i, 0) + 2;

export type SeedlingQaTableContext = {
  rowData?: any;
  dispatch?: any;
};
export const SeedlingQaTableContext = React.createContext<SeedlingQaTableContext>({});

export function SeedlingQaTable() {
  useStyles();
  const theme = useTheme();
  const width = calculateWidth(columnDefs);
  const [gridApi, setGridApi] = React.useState<GridApi>();
  const onGridReady = (event: GridReadyEvent) => setGridApi(event.api);
  const onClick = (event: React.MouseEvent<HTMLElement>) => console.log();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <div className="ag-theme-balham" style={{ width: width }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          rowHeight={50}
          domLayout={'autoHeight'}
          modules={AllCommunityModules}
          onGridReady={onGridReady}
        ></AgGridReact>
      </div>
      <Box marginTop={theme.spacing(0.5)}>
        <Button color="primary" variant="contained" onClick={onClick}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}
