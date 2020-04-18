import React from 'react';
import { camelCase } from 'lodash';
import { ICellRendererParams } from '@ag-grid-community/all-modules';

// import { rowConfig } from '../configuration';
import { CheckboxCheckAll } from './checkbox-check-all';
import { CheckboxMetric } from './checkbox-metric';
import { SeedlingQaTableContext } from '../context';

export { CheckboxCheckAll };
export { CheckboxMetric };
export { SelectGapAndPlug } from './select-gap-and-plug';
export { TextFieldMetric } from './text-field-metric';

export const CellRendererFramework: React.FC<ICellRendererParams> = (props) => {
  const context = React.useContext(SeedlingQaTableContext);
  const config = context.rowConfig[camelCase(props.data.metricName)];

  if (!config) {
    return;
  }

  const Component = config.component;

  if (config.noRender && config.noRender === props.colDef.field) {
    return null;
  }

  if (props.colDef.field === 'checkAll') {
    return <CheckboxCheckAll {...props} />;
  }

  return <Component {...props} />;
};
