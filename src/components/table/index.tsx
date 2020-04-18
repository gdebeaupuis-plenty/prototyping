import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { AgGridReact } from '@ag-grid-community/react';
import { AllCommunityModules, GridReadyEvent, GridApi } from '@ag-grid-community/all-modules';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

import { useLoadData } from './use-load-data';

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
        alignItems: 'center'
      },
      '& .ag-cell:first-child': {
        justifyContent: 'flex-start',
      },
    },
  },
  typography: {
    color: theme.palette.grey[500],
  }
}));

export function Table() {
  useStyles();
  const {columnDefs, rowData} = useLoadData();

  const width = columnDefs.map(header => header.width).reduce((sum: number, i : number) => sum + i, 0) + 2;

  const [gridApi, setGridApi] = React.useState<GridApi>();
  const onGridReady = (event: GridReadyEvent) => setGridApi(event.api);

  if (gridApi) {
    // gridApi.
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <div className="ag-theme-balham" style={{width: width, height: '80vh'}}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          rowHeight={50}
          modules={AllCommunityModules}
          onGridReady={onGridReady}
        >
        </AgGridReact>
      </div>
    </Box>
  )
}