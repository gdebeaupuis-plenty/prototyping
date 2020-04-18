import React from 'react';
import { ColDef } from '@ag-grid-community/all-modules';
import { SeedlingQaTable } from '../seedling-qa-table';
import {
  CellRendererFramework,
  CheckboxMetric,
  SelectGapAndPlug,
  TextFieldMetric,
} from '../seedling-qa-table/cell-renderer-framework';

export const Tigris: React.FC = () => {
  const columnDefs: ColDef[] = [
    { headerName: 'Quality Metric', field: 'metricName', width: 220 },
    {
      headerName: 'C3',
      field: 'C3',
      cellRendererFramework: CellRendererFramework,
      width: 100,
      refData: { checkAllable: 'true' },
    },
    {
      headerName: 'E3',
      field: 'E3',
      cellRendererFramework: CellRendererFramework,
      width: 100,
      refData: { checkAllable: 'true' },
    },
    {
      headerName: 'G3',
      field: 'G3',
      cellRendererFramework: CellRendererFramework,
      width: 100,
      refData: { checkAllable: 'true' },
    },
    {
      headerName: 'C12',
      field: 'C12',
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
      headerName: 'G12',
      field: 'G12',
      cellRendererFramework: CellRendererFramework,
      width: 100,
      refData: { checkAllable: 'true' },
    },
    {
      headerName: 'C14',
      field: 'C14',
      cellRendererFramework: CellRendererFramework,
      width: 100,
      refData: { checkAllable: 'true' },
    },
    {
      headerName: 'E14',
      field: 'E14',
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
      headerName: 'C21',
      field: 'C21',
      cellRendererFramework: CellRendererFramework,
      width: 100,
      refData: { checkAllable: 'true' },
    },
    {
      headerName: 'E21',
      field: 'E21',
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
      headerName: 'Check All',
      field: 'checkAll',
      cellRendererFramework: CellRendererFramework,
      width: 100,
    },
  ];

  const rowConfig = {
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
    leafDiscoloration: {
      label: 'Leaf Discoloration',
      component: CheckboxMetric,
    },
    dryPlug: {
      label: 'Dry Plug',
      component: CheckboxMetric,
    },
    oversaturatedPlug: {
      label: 'Oversaturated Plug',
      component: CheckboxMetric,
    },
    mold: {
      label: 'Mold',
      component: CheckboxMetric,
    },
    incorrectSku: {
      label: 'Incorrect SKU',
      component: CheckboxMetric,
    },
    injuriousForeignMaterial: {
      label: 'Injurious Foreign Material',
      component: CheckboxMetric,
    },
  };

  const rowData: any[] = [
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
    {
      metricName: rowConfig.leafDiscoloration.label,
    },
    {
      metricName: rowConfig.dryPlug.label,
    },
    {
      metricName: rowConfig.oversaturatedPlug.label,
    },
    {
      metricName: rowConfig.mold.label,
    },
    {
      metricName: rowConfig.incorrectSku.label,
    },
    {
      metricName: rowConfig.injuriousForeignMaterial.label,
    },
  ];
  return <SeedlingQaTable columnDefs={columnDefs} rowConfig={rowConfig} rowData={rowData} />;
};
