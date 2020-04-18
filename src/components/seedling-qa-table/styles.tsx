import { makeStyles } from '@material-ui/core';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

export const useStyles = makeStyles((theme) => ({
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
}));
