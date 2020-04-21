import React from 'react';
import {
  CheckboxCheckAll,
  CheckboxMetric,
  SelectGapAndPlug,
  TextFieldMetric,
  DeferToCellRendererRowValue,
  FormControl,
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
      formControl: FormControl,
    },
    columnDefs: [
      { headerName: 'Quality Metric', field: 'metricName', cellRenderer: 'formControl', width: 220 },
      plugCol('A1'),
      plugCol('B1'),
      plugCol('C1'),
      { headerName: 'Check All', field: 'checkAll', width: 100, cellRenderer: 'checkboxCheckAll' },
      { headerName: 'disableCellEditor', field: 'disableCellEditor', hide: true, width: 0 },
      { headerName: 'cellRenderer', field: 'cellRenderer', hide: true, width: 0 },
      { headerName: 'checkAllable', field: 'checkAllable', hide: true, width: 0 },
    ],
    rowData: [
      {
        checkAllable: false,
        metricName: 'Seedling Count*',
        // @todo is there a better way to declare validation?
        requires: ['A1', 'B1', 'C1'],
        errors: [],
        validates: (value) => value > 10,
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
      {
        cellRenderer: 'checkBoxMetric',
        checkAllable: true,
        disableCellEditor: true,
        metricName: 'Overdeveloped Shoot',
        A1: true,
        B1: true,
        C1: true,
      },
    ],
  };

  return <SeedlingQaTable agGridProps={state} />;
};
