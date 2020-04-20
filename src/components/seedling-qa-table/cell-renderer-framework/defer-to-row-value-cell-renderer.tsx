import React from 'react';
import { ICellRendererParams } from '@ag-grid-community/all-modules';
import { CheckboxMetric } from './checkbox-metric';
import { SelectGapAndPlug } from './select-gap-and-plug';

const FrameworkComponent = {
  checkBoxMetric: CheckboxMetric,
  selectGapAndPlug: SelectGapAndPlug,
};

export const DeferToCellRendererRowValue: React.FC<ICellRendererParams> = (props) => {
  if (!props.data.cellRenderer) {
    return <span>{props.value}</span>;
  }

  const Component = FrameworkComponent[props.data.cellRenderer];

  return <Component {...props} />;
};
