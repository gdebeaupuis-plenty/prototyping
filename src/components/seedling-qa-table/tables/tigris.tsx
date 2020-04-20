import React from 'react';
import {
  CheckboxCheckAll,
  CheckboxMetric,
  SelectGapAndPlug,
  TextFieldMetric,
  DeferToCellRendererRowValue,
} from '../cell-renderer-framework';
import { SeedlingQaTable } from '../index';

const plugCol = (name) => ({
  headerName: name,
  field: name,
  width: 100,
  editable: (params) => !params.data.disableCellEditor,
  cellRenderer: 'deferToCellRendererRowValue',
});

export const Tigris: React.FC = () => {
  const state = {
    frameworkComponents: {
      checkboxCheckAll: CheckboxCheckAll,
      checkBoxMetric: CheckboxMetric,
      selectGapAndPlug: SelectGapAndPlug,
      textFieldMetric: TextFieldMetric,
      deferToCellRendererRowValue: DeferToCellRendererRowValue,
    },
    columnDefs: [
      { headerName: 'Quality Metric', field: 'metricName', width: 220 },
      plugCol('A1'),
      plugCol('B1'),
      plugCol('C1'),
      plugCol('Tray'),
      { headerName: 'disableCellEditor', field: 'disableCellEditor', hide: true, width: 0 },
      { headerName: 'cellRenderer', field: 'cellRenderer', hide: true, width: 0 },
      { headerName: 'checkAllable', field: 'checkAllable', hide: true, width: 0 },
      { headerName: 'Check All', field: 'checkAll', width: 100, cellRenderer: 'checkboxCheckAll' },
    ],
    rowData: [
      {
        checkAllable: false,
        metricName: 'Seedling Count*',
      },
      {
        cellRenderer: 'selectGapAndPlug',
        checkAllable: false,
        disableCellEditor: true,
        metricName: 'Gap & Plug',
      },
      {
        cellRenderer: 'checkBoxMetric',
        checkAllable: true,
        disableCellEditor: true,
        metricName: 'Underdeveloped Shoot',
      },
    ],
  };

  return <SeedlingQaTable agGridProps={state} />;
};
