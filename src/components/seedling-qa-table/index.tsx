import React from 'react';
import { Box, Button, useTheme } from '@material-ui/core';
import { AgGridReact } from '@ag-grid-community/react';
import { AllCommunityModules, CellKeyPressEvent } from '@ag-grid-community/all-modules';

import { useStyles } from './styles';

const calculateWidth = (columnDefs) =>
  columnDefs.map((header) => header.width).reduce((sum: number, i: number) => sum + i, 0) + 2;

export interface SeedlingQaProps {
  agGridProps: any;
}

export const SeedlingQaTable: React.FC<SeedlingQaProps> = (props) => {
  useStyles();
  const theme = useTheme();
  const width = calculateWidth(props.agGridProps.columnDefs);
  const onClick = (event: React.MouseEvent<HTMLElement>) => console.log();
  const onCellKeyPress = (event: CellKeyPressEvent) => {
    if (
      event.colDef.cellRenderer === 'deferToCellRendererRowValue' &&
      event.node.data.cellRenderer === 'checkBoxMetric'
    ) {
      console.log(event.value);
      event.node.setDataValue(event.colDef.field, !event.value);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <div className="ag-theme-balham" style={{ width: width }}>
        <AgGridReact
          domLayout={'autoHeight'}
          rowHeight={48}
          singleClickEdit={true}
          modules={AllCommunityModules}
          onCellKeyPress={onCellKeyPress}
          {...props.agGridProps}
        ></AgGridReact>
      </div>
      <Box marginTop={theme.spacing(0.5)}>
        <Button color="primary" variant="contained" onClick={onClick}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};
