import React from 'react';
import { ColDef } from '@ag-grid-community/all-modules';
import { SeedlingQaTable } from '../seedling-qa-table';
import {
  CellRendererFramework,
  CheckboxMetric,
  SelectGapAndPlug,
  TextFieldMetric,
} from '../seedling-qa-table/cell-renderer-framework';

export const columnDefs: ColDef[] = [
  { headerName: 'Quality Metric', field: 'metricName', width: 220 },
  {
    headerName: 'C3',
    field: 'C3',
    cellRendererFramework: CellRendererFramework,
    width: 100,
    refData: { checkAllable: 'true' },
  },
  {
    headerName: 'E12',
    field: 'E12',
    cellRendererFramework: CellRendererFramework,
    width: 100,
    refData: { checkAllable: 'true' },
  },
  {
    headerName: 'G14',
    field: 'G14',
    cellRendererFramework: CellRendererFramework,
    width: 100,
    refData: { checkAllable: 'true' },
  },
  {
    headerName: 'G21',
    field: 'G21',
    cellRendererFramework: CellRendererFramework,
    width: 100,
    refData: { checkAllable: 'true' },
  },
  {
    headerName: 'Tray',
    field: 'tray',
    cellRendererFramework: CellRendererFramework,
    width: 100,
    refData: { checkAllable: 'true' },
  },

  {
    headerName: 'Check All',
    field: 'checkAll',
    cellRendererFramework: CellRendererFramework,
    width: 100,
  },
];

export const rowConfig = {
  seedlingCount: {
    label: 'Seedling Count*',
    noRender: 'checkAll',
    component: TextFieldMetric,
  },
  gapPlug: {
    label: 'Gap & Plug',
    noRender: 'checkAll',
    component: SelectGapAndPlug,
  },
  underdevelopedShoot: {
    label: 'Underdeveloped Shoot',
    component: CheckboxMetric,
  },
  overdevelopedShoot: {
    label: 'Overdeveloped Shoot',
    component: CheckboxMetric,
  },
  leggy: {
    label: 'Leggy',
    component: CheckboxMetric,
  },
  rootDiscoloration: {
    label: 'Root Discoloration',
    component: CheckboxMetric,
  },
};

export const rowData: any[] = [
  {
    metricName: rowConfig.seedlingCount.label,
  },
  {
    metricName: rowConfig.gapPlug.label,
  },
  {
    metricName: rowConfig.underdevelopedShoot.label,
  },
  {
    metricName: rowConfig.overdevelopedShoot.label,
  },
  {
    metricName: rowConfig.leggy.label,
  },
  {
    metricName: rowConfig.rootDiscoloration.label,
  },
];

export const Orca: React.FC = () => <SeedlingQaTable columnDefs={columnDefs} rowConfig={rowConfig} rowData={rowData} />;
