import React from 'react';
import { ICellRendererParams } from '@ag-grid-community/all-modules';

export const withHideColumns = (BaseComponent: React.FC<ICellRendererParams>) => (props) => {
  console.log(props.colDef.field);
  console.log(props.data.hideColumns && props.data.hideColumns.includes(props.colDef.field));

  if (props.data.hideColumns && props.data.hideColumns.includes(props.colDef.field)) {
    return <span></span>;
  }

  return <BaseComponent {...props} />;
};
