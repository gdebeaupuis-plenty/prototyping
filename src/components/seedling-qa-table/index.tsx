import React from 'react';
import { Box, Button, useTheme } from '@material-ui/core';
import { AgGridReact } from '@ag-grid-community/react';
import { ColDef, AllCommunityModules } from '@ag-grid-community/all-modules';

// import { columnDefs, rowData } from './configuration';
import { SeedlingQaTableContext } from './context';
import { useStyles } from './styles';

const calculateWidth = (columnDefs) =>
  columnDefs.map((header) => header.width).reduce((sum: number, i: number) => sum + i, 0) + 2;

export interface SeedlingQaProps {
  columnDefs: ColDef[];
  rowConfig: any;
  rowData: any[];
}

export const SeedlingQaTable: React.FC<SeedlingQaProps> = (props) => {
  useStyles();
  const theme = useTheme();
  const width = calculateWidth(props.columnDefs);
  const onClick = (event: React.MouseEvent<HTMLElement>) => console.log();

  console.log(props.rowConfig);

  return (
    <SeedlingQaTableContext.Provider value={{ rowConfig: props.rowConfig }}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
        <div className="ag-theme-balham" style={{ width: width }}>
          <AgGridReact
            columnDefs={props.columnDefs}
            rowData={props.rowData}
            rowHeight={50}
            domLayout={'autoHeight'}
            modules={AllCommunityModules}
          ></AgGridReact>
        </div>
        <Box marginTop={theme.spacing(0.5)}>
          <Button color="primary" variant="contained" onClick={onClick}>
            Submit
          </Button>
        </Box>
      </Box>
    </SeedlingQaTableContext.Provider>
  );
};
