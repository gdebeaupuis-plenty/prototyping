import React from 'react';
import {
  CheckboxCheckAll,
  CheckboxMetric,
  SelectGapAndPlug,
  TextFieldMetric,
  DeferToCellRendererRowValue,
  FormControl,
  withHideColumns,
} from '../cell-renderer-framework';
import { SeedlingQaTable } from '../index';

const plugCol = (name) => ({
  headerName: name,
  field: name,
  width: 100,
  editable: (params) => {
    const isHiddenColumn = params.data.hideColumns && params.data.hideColumns.includes(params.colDef.field);
    return !isHiddenColumn && !params.data.disableCellEditor;
  },
  cellRenderer: 'deferToCellRendererRowValue',
});

export const Tigris: React.FC = () => {
  const state = {
    frameworkComponents: {
      checkboxCheckAll: withHideColumns(CheckboxCheckAll),
      checkBoxMetric: withHideColumns(CheckboxMetric),
      selectGapAndPlug: withHideColumns(SelectGapAndPlug),
      textFieldMetric: withHideColumns(TextFieldMetric),
      deferToCellRendererRowValue: withHideColumns(DeferToCellRendererRowValue),
      formControl: withHideColumns(FormControl),
    },
    columnDefs: [
      { headerName: 'Quality Metric', field: 'metricName', cellRenderer: 'formControl', width: 220 },
      plugCol('A1'),
      plugCol('B1'),
      plugCol('C1'),
      plugCol('others'),
      { headerName: 'Check All', field: 'checkAll', width: 100, cellRenderer: 'checkboxCheckAll' },
      { headerName: 'disableCellEditor', field: 'disableCellEditor', hide: true, width: 0 },
      { headerName: 'cellRenderer', field: 'cellRenderer', hide: true, width: 0 },
      { headerName: 'hideColumns', field: 'hideColumns', hide: true, width: 0 },
    ],
    rowData: [
      {
        hideColumns: ['checkAll', 'others'],
        metricName: 'Seedling Count*',
        requires: ['A1', 'B1', 'C1'],
        errors: [],
        validates: (value) => value > 10,
      },
      {
        cellRenderer: 'selectGapAndPlug',
        hideColumns: ['checkAll', 'others'],
        disableCellEditor: true,
        metricName: 'Gap & Plug',
      },
      {
        cellRenderer: 'checkBoxMetric',
        disableCellEditor: true,
        metricName: 'Underdeveloped Shoot',
      },
      {
        cellRenderer: 'checkBoxMetric',
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
