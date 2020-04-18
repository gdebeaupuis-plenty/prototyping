import React from 'react';
import { ICellRendererParams } from '@ag-grid-community/all-modules';

export const DeferToMetric: React.FC<ICellRendererParams> = (props) => {
  const { data } = props;

  if (data.cellRendererFramework) {
    const Component = data.cellRendererFramework;
    return <Component {...props} />;
  }

  return <span>{props.valueFormatted}</span>;
};
